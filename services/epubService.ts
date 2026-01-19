import JSZip from 'jszip';
import { BookSection } from '../types';

const createChapterContent = (title: string, content: string) => {
  return `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head>
  <title>${title}</title>
  <style>
    body { font-family: serif; line-height: 1.5; margin: 0; padding: 1em; }
    h1 { color: #047857; font-size: 2em; margin-bottom: 0.5em; }
    h2 { color: #334155; font-size: 1.5em; margin-top: 1.5em; }
    h3 { color: #334155; font-size: 1.25em; margin-top: 1.2em; }
    p { margin-bottom: 1em; }
    ul, ol { margin-bottom: 1em; margin-left: 1.5em; }
    li { margin-bottom: 0.5em; }
    blockquote { border-left: 4px solid #6ee7b7; padding-left: 1em; color: #475569; font-style: italic; margin: 1em 0; }
    a { color: #059669; text-decoration: none; }
    table { width: 100%; border-collapse: collapse; margin: 1em 0; }
    th, td { border: 1px solid #cbd5e1; padding: 0.5em; text-align: left; }
    th { background-color: #f1f5f9; }
  </style>
</head>
<body>
  ${content}
</body>
</html>`;
};

const flattenSectionsForEpub = (sections: BookSection[]): { section: BookSection; filename: string }[] => {
  let flat: { section: BookSection; filename: string }[] = [];
  
  sections.forEach(section => {
    const filename = `Text/${section.id}.xhtml`;
    flat.push({ section, filename });
    if (section.children) {
      flat = flat.concat(flattenSectionsForEpub(section.children));
    }
  });
  
  return flat;
};

export const generateEpub = async (bookContent: BookSection[]) => {
  const zip = new JSZip();
  
  // 1. Mimetype
  zip.file('mimetype', 'application/epub+zip', { compression: "STORE" });
  
  // 2. Container.xml
  zip.folder('META-INF')?.file('container.xml', `<?xml version="1.0"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
   <rootfiles>
      <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
   </rootfiles>
</container>`);

  const oebps = zip.folder('OEBPS');
  if (!oebps) throw new Error("Could not create OEBPS folder");

  // 3. Text Content (Chapters)
  const flatSections = flattenSectionsForEpub(bookContent);
  
  flatSections.forEach(({ section, filename }) => {
    // Clean content for XHTML
    // This is a basic cleanup. In a real scenario, you'd want rigorous HTML parsing.
    // We assume the content in bookContent.ts is relatively clean HTML.
    // We need to close self-closing tags for XML strictness (like <br> -> <br/>, <img> -> <img/>)
    let xhtmlContent = section.content || '';
    xhtmlContent = xhtmlContent
      .replace(/<br>/g, '<br/>')
      .replace(/<hr>/g, '<hr/>')
      .replace(/<img([^>]+)>/g, '<img$1/>');
      
    // If it's a container with no content but has children, give it a title page
    if (!xhtmlContent && section.children) {
       xhtmlContent = `<h1>${section.title}</h1>`;
    }

    oebps.file(filename, createChapterContent(section.title, xhtmlContent));
  });

  // 4. Navigation (nav.xhtml)
  const createNavLi = (s: BookSection): string => {
    let li = `<li><a href="Text/${s.id}.xhtml">${s.title}</a>`;
    if (s.children && s.children.length > 0) {
      li += `<ol>${s.children.map(createNavLi).join('')}</ol>`;
    }
    li += `</li>`;
    return li;
  };

  const navContent = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head><title>Table of Contents</title></head>
<body>
  <nav epub:type="toc" id="toc">
    <h1>Table of Contents</h1>
    <ol>
      ${bookContent.map(createNavLi).join('')}
    </ol>
  </nav>
</body>
</html>`;

  oebps.file('nav.xhtml', navContent);

  // 5. OPF (Metadata & Manifest)
  const manifestItems = flatSections.map(item => 
    `<item id="${item.section.id}" href="${item.filename}" media-type="application/xhtml+xml"/>`
  ).join('\n');

  const spineItems = flatSections.map(item => 
    `<itemref idref="${item.section.id}"/>`
  ).join('\n');

  const opfContent = `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="BookId" version="3.0">
    <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
        <dc:title>Building Your Language Muscle</dc:title>
        <dc:creator>Dominik Lukeš</dc:creator>
        <dc:language>en</dc:language>
        <dc:identifier id="BookId">urn:uuid:building-your-language-muscle-app</dc:identifier>
        <meta property="dcterms:modified">${new Date().toISOString().split('.')[0]}Z</meta>
    </metadata>
    <manifest>
        <item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
        ${manifestItems}
    </manifest>
    <spine>
        ${spineItems}
    </spine>
</package>`;

  oebps.file('content.opf', opfContent);

  // 6. Generate Blob
  const blob = await zip.generateAsync({ type: 'blob', mimeType: 'application/epub+zip' });
  return blob;
};

export const downloadEpub = async (bookContent: BookSection[]) => {
  try {
    const blob = await generateEpub(bookContent);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Building-Your-Language-Muscle.epub';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Failed to generate EPUB", error);
    alert("Could not generate EPUB. Please try again.");
  }
};
