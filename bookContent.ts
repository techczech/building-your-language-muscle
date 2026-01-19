
import { BookSection, SectionType } from './types';

export const BOOK_CONTENT: BookSection[] = [
  {
    id: 'intro-group',
    title: 'Introduction',
    type: SectionType.CONTAINER,
    defaultExpanded: true,
    content: '<h1 class="text-3xl font-bold mb-6 text-emerald-800">Introduction</h1><p class="text-lg text-slate-600 mb-4">Welcome to your new language learning journey. This section sets the stage for deliberate practice.</p>',
    children: [
      {
        id: 'about-guide',
        title: '1. About this guide',
        type: SectionType.INTRO,
        content: `
          <h2 class="text-2xl font-bold mt-2 mb-4 text-slate-700">What is this</h2>
          <p class="mb-4">
            This is a guide for you, the language student. It is aimed at students of any language but it contains an appendix focusing on how to apply this to learning Czech. It is about a new way of learning called <strong>deliberate practice</strong>. It will tell you how you can succeed if you work hard and smart. Here’s the key advice:
          </p>
          <ul class="list-disc ml-6 space-y-2 mb-6 text-slate-700">
            <li>Think about your <strong>teacher as your coach</strong> and your class as a place to get feedback. All the hard work will happen outside of class.</li>
            <li>Set very <strong>specific goals</strong> for your learning. Not just to learn a language but also what you actually want to be able to say after a set amount time.</li>
            <li>Think about the aim of learning as overcoming the limits of <strong>working memory</strong> by building up <strong>bigger and richer chunks</strong> of language.</li>
            <li>Organise your learning into <strong>6-week sprints</strong> and plan to spend at least <strong>20 hours</strong> in each sprint on focused practice.</li>
            <li>Practice in <strong>smaller, more frequent segments</strong>, but have at least some 30 minute or longer intensive practice sessions.</li>
            <li><strong>Get feedback</strong> on how you’re doing as soon as possible. And <strong>monitor your progress</strong> with regular audits.</li>
            <li>Use various <strong>strategies and techniques</strong> to make your practice effective. Get familiar with useful <strong>tools and apps</strong>.</li>
          </ul>
        `
      },
      {
        id: 'how-to-read',
        title: '2. How to read this',
        type: SectionType.INTRO,
        content: `
          <h2 class="text-2xl font-bold mt-2 mb-4 text-slate-700">How to read this document</h2>
          <p class="mb-4">
            You can read different parts of this document independently. If you’re just interested in <strong>deliberate practice</strong>, it is described in Step 2 of How to do it. If you’re only interested in <strong>specific tips on language learning</strong>, they are in Step 3. If you want to know more about <strong>proficiency levels</strong>, how to define them, what they mean and what it takes, to achieve them, read Appendix 2. And if you are only interested in how to approach <strong>learning Czech</strong>, then Appendix 3 is for you. On the other hand, you want to read even more, then go to Appendix 4.
          </p>
        `
      },
      {
        id: 'good-news',
        title: '3. The Good News',
        type: SectionType.INTRO,
        content: `
          <h2 class="text-2xl font-bold mt-2 mb-4 text-slate-700">The Good News about Deliberate Practice</h2>
          <p class="mb-4">Dear Students,</p>
          <p class="mb-4">
            Learning a new language is the best thing you can do. Learning a new language can be fun. But it is also hard. It takes time and it takes effort. They say about going to the gym: “If it doesn’t hurt, you’re not doing it right.” And the same thing is true about language learning. It’s fun. But not every minute of it can be fun. You have to put in some effort to get the wonderful reward of being able to speak to someone in their own language. And then hear and understand what they have to say. Read about new worlds, find out about different ways of thinking.
          </p>
          <p class="mb-4">
            That’s the bad news. You will have to put some effort in. Most of the time it will be fun. But sometimes you will have to force yourself into it.
          </p>
          <p class="mb-4">
            But here’s the good news. Just like anybody can develop stronger muscles, anybody can learn a language. Young and old. And surprisingly, older people can be better at it than children. Because they already have experience they can build on. Children learn a language through brute force. They repeat, try and fail for years and years. They do almost nothing else. Teenagers and adults can go about it the smart way.
          </p>
          <p class="mb-4">
            This document is about the smart way. The way that is based on experience and science. The science that can help you is called Deliberate Practice. Deliberate practice did not invent a new way of learning that nobody ever thought of before. It came out of studying how top performers actually learn all they need to become good at what they do. Chess players, musicians, athletes, doctors, even language learners. Deliberate practice is not something new for them, it is just a description of the techniques they already use to be the best.
          </p>
          <p class="mb-4">
            Deliberate practice showed how the people who are really good at something get that way. But the real breakthrough was the discovery that deliberate practice can help anybody. No talent is required. You may need talent to become the very best but you’re not studying to be the best at speaking a language. You’re studying to be good at it. And with deliberate practice, anyone can become good at language. And then a little better.
          </p>
          <p class="mb-4">
            So if you’ve ever said to yourself “I’m not good at learning languages”, now you have a much better thing to say. “I haven’t discovered a good way to learn a language, yet.” The process of discovery can start now. And if you’re already “good” at language learning, lets see if you can get even better.
          </p>
          <p class="mb-4">
            Language learning does not require good memory, high IQ or some mysterious ear for languages, it requires time and effort. You still have to put in both, but you can go much further than you imagined, if you make your practice deliberate.
          </p>
        `
      }
    ]
  },
  {
    id: 'building-muscle',
    title: 'Building Your Muscle',
    type: SectionType.CONTAINER,
    content: '<h1 class="text-3xl font-bold mb-6 text-emerald-800">How to do it: 3 Steps to Strength</h1><p class="mb-6 text-slate-600">Follow these three steps to transform your approach to language learning.</p>',
    defaultExpanded: true,
    children: [
      {
        id: 'step-1',
        title: 'Step 1: Get the right attitude',
        type: SectionType.CHAPTER,
        content: `
          <h2 class="text-2xl font-bold mb-4 text-slate-700">Step 1: Get the right attitude</h2>
          
          <p class="mb-4">
            You need to stop thinking of learning a language as learning history or biology. Going to class, taking notes, studying at home. It is much more like learning to play a musical instrument, or training for a marathon. You can only learn by doing it. A lot. Slowly building up your muscle memory and your stamina. But you have to spend time and effort on it, going to a class once a week is not enough.
          </p>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Rethink what you want from your teacher</h3>
          <p class="mb-4">
            The first thing you have to do is realise that nobody can learn for you. Just like with building muscles, you have to put in the hard work. Stop thinking about your teacher as someone who teaches you the language. Think of your teacher as someone who tells you what and how to practice. As someone who helps you set and revise your training goals and give you feedback on your practice.
          </p>
          <p class="mb-4">
            Wanting a teacher to “teach you” is like wanting your personal trainer to do the exercises for you. Your teacher will tell you what to practice but you have to do the heavy lifting. You should start thinking of your teacher as your coach instead.
          </p>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Rethink what you want to do in the classroom</h3>
          <p class="mb-4">
            If the process of learning a language is like going to the gym, the classroom is NOT the gym. You can get enough exercise to build your real muscles in the gym. But you cannot do that in the language classroom. It might work if you had a private tutor who would meet with you five times a week, but not with 10 other people in the class once a week. No matter how much group work you do, it is not enough.
          </p>
          <p class="mb-4">
            Classroom is NOT where you learn or practice. Classroom is where you get feedback on how well you’re doing, where you get assignments for further practice and motivation from your teacher. The classroom is also great to get feedback and motivation from your classmates. See how they are doing, be motivated by their successes and learn from their struggles.
          </p>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Rethink how you use the textbook</h3>
          <p class="mb-4">
            Textbooks are great. They give you structure, path to follow, goals and the tools you need. But why do we need so many? Why do so many people feel the need to write the best textbook? That’s because all teachers know, textbooks are not perfect. They can hurt your learning as much as help. They are a security blanket for the student but that is because they hide all the work that has to be done.
          </p>
          <p class="mb-4">
            You should use textbooks to get dialogues, vocabulary, grammar and some exercises. But remember that all textbooks are aimed at the slightly below average student in a typical language classroom. If you’re using deliberate practice to build up your language muscle, you are not an average student. Worst of all, textbooks give you just enough practice to fill two hours a week of class time with a little bit of homework in between. That is not enough. There are never enough exercises, never quite enough words.
          </p>
          <p class="mb-4">
            It may feel that there is a lot already in every textbook lesson but that’s because they don’t expect you to practice. Put in the necessary time to really get good. Build up the speaking, reading and writing muscles. So you should always look at every lesson in a textbook not as a target to meet but as a target to exceed. By a lot. At the end of it, you want it to feel completely trivial, not something where you still don’t quite get it.
          </p>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Think about how you learn</h3>
          <p class="mb-4">
            People who succeed don’t just practice and get better. They’re constantly reflecting on their learning process. They stop, think and evaluate. Am I practicing the right way? Am I developing what I know? Am I practicing the right thing? Very often, your teacher or your coach can help you. But you can also be your own coach.
          </p>
          <p class="mb-4">
            Most successful learners are constantly thinking about the learning process. They always keep half an eye on how the learning process is going. They don’t just think about whether they are learning but also how they are learning. They form theories and they test them. They change and revise. They don’t get stuck doing something one way. They don’t continue learning the same way just because it worked for the last thing they learned. They want to learn the way that is best for what they want to achieve in the future.
          </p>
          <p class="mb-4">
            You may already have a preconceived notion of what kind of a learner you are. Many people say things like “I’m a visual learner”. They’re almost certainly not. The research on this turned out to be flawed. But even if it were true, learning is so complex that nobody can summarise their learning style by saying they are just one thing. Don’t try to label yourself, you’re not taking a Which-Harry-Potter-Character-Are-You quiz.
          </p>
          <p class="mb-4">
            What you need to do is look at your strategies. There is a whole inventory of them, start there. You need to evaluate the strategies and how well they work for you on a particular task. Don’t judge them just by how you feel during them the first time, judge them by how well they work in a week or in a month. For example, listening without seeing something written is hard, but that’s how you have conversation or listen to directions. So figure out a way to do it. Don’t hide behind your preference. But don’t ignore it either.
          </p>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Get ready for the feels</h3>
          <p class="mb-4">
            Learning anything is an emotional business. Learning a language even more so. The way we speak is who we are. We don’t use language like a tool for speaking. We use it to express our innermost selves. Even when we’re asking directions or ordering coffee, we are still ourselves and we want people to see us that way. And when we can’t speak like ourselves we’re uncomfortable, we feel that the world sees a caricature of us.
          </p>
          <p class="mb-4">
            The most successful language learners are those who can imagine themselves as somebody else. Almost like acting a role. But you don’t have to be an actor to learn a language. You just have to use some of the same techniques. Imagine you’re someone else, let go of your inhibitions a bit. Especially when you’re learning pronunciation and intonation.
          </p>
          <p class="mb-4">
            But it is true even when you’re trying to speak about yourself, where you live, what you do, what you like. At first, it will feel like you’re a child again, you can’t express the simplest but at the same time the most important things. Who you are and what you want. You will have those feelings. Frustration, humiliation, desperation. They can be dispiriting. It’s much safer to say “I’m not good at language learning” and give up. But you can also use these feelings to motivate you to get better.
          </p>
          <p class="mb-4">
            There’s nothing anybody can tell you not to have these sorts of feelings. You will have them; sometimes just a little and sometimes a lot. But you will be able to cope with them better, if you know they’re coming. And that you will get over them as you get better. You should also know that you won’t be the only one. Talk with your peers, find out how they’re coping. Learn from each other.
          </p>
          <p class="mb-4">
            Then there’s the struggle with the learning process itself. There will be times when you’re practicing something and it will feel like it’s not going in, like you’re never going to learn it. That never feels good. It’s frustrating but may also make you feel bad about yourself. Feel like you’re stupid. That also happens to everyone, all the time. So here’s a new mantra for you adapted from the virtuoso bassist Victor Wooten:
          </p>
          <blockquote class="italic border-l-4 border-emerald-300 pl-4 py-2 my-4 text-slate-600 bg-slate-50">
            When you practice something and can’t get it right, don’t stop. Don’t think about how bad you feel now. Think about how great you’ll feel next week, when you’ll be able to do it and won’t even remember what it was like not to.
          </blockquote>
        `
      },
      {
        id: 'step-2',
        title: 'Step 2: Set the right goals',
        type: SectionType.CHAPTER,
        content: `
          <h2 class="text-2xl font-bold mb-4 text-slate-700">Step 2: Set the right goals</h2>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">SMART Objectives</h3>
          <p class="mb-4">
            Everybody’s heard about SMART objectives. Specific, Measurable, Achievable, Relevant, Time-based. SMART. When you’re deciding what you want to achieve in learning a language, you must be SMART. It is not enough to say, you want to learn a language, that’s not measurable. You can’t just say that you want to achieve the Intermediate level or pass the exam, that’s not relevant. Or that you want to be able to have a conversation or get about in as tourist. That’s not specific enough. You need to define your goals with much more attention to detail and with an eye on how you will be learning and measuring progress.
          </p>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Your ultimate goal</h3>
          <p class="mb-4">
            You may have a vague idea about where you want to get but how do you specify it in a measurable way? Luckily, you’re not on your own. There’s not just one but two frameworks for evaluating where you are and where you may want to get. There is the CEFR (Common European Framework Reference for Languages) and there are the ACTFL Proficiency Guidelines (American Council for the Teaching of Foreign Languages). They are very similar and do the same thing but you may find one resonates with you better than the other.
          </p>
          <p class="mb-4">
            What these do is describe your goals in terms of your ability to do something useful with language in a specific context. For example, the level A2 of the CEFR describes what somebody is able to do with language.
          </p>
          <div class="bg-slate-100 p-4 rounded-md my-4 text-slate-700 italic">
            Can understand sentences and frequently used expressions related to areas of most immediate relevance (e.g. very basic personal and family information, shopping, local geography, employment). Can communicate in simple and routine tasks requiring a simple and direct exchange of information on familiar and routine matters. Can describe in simple terms aspects of his/her background, immediate environment and matters in areas of immediate need.
          </div>
          <p class="mb-4">
            This is just a global description, there are also more details that break it down into listening, speaking, reading and writing.
          </p>
          <p class="mb-4">
            If you just want to get on with it, use the CEFR. It has six levels that are broadly described in the Global Scale. But you will want to use the self-assessment grid which is available in multiple languages.
          </p>
          <p class="mb-4">
            You can find more details in the chapter <strong><a href="#/fine-tuning-aims" class="text-emerald-600 underline">Fine-tuning your aims</a></strong>. It describes the CEFR levels, what they mean in practice and what it takes to reach them.
          </p>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Your intermediate goals</h3>
          <p class="mb-4">
            So now that you have your overall aim, you need to set some intermediate goals that you can measure progress with.
          </p>
          <p class="mb-4">
            Write down a few conversations in English that you’d like to be able to have at the level you chose as your goal, in two weeks, in six weeks, in three months, six months and in a year. Find some texts or types of text you’d like to read, or videos you’d like to be able to watch and understand. Be very specific. Don’t worry, you don’t have to translate this immediately. Just have it as a goal.
          </p>
          <p class="mb-4">
            Then evaluate your progress every week.
          </p>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Immediate Objectives, Working Memory and the Fantastic Elastic Chunks</h3>
          <p class="mb-4">
            So now you have your final aim. And your intermediate goal. But how do you go about setting the immediate objectives? The things you will actually be practicing. First, let’s think about how you actually speak your first language.
          </p>
          <p class="mb-4">
            Languages have lots of words and quite a few rules. But nobody could ever say anything if they tried to do it by selecting words and applying the rules to them. Even the simplest sentence like “How are you doing” has more rules than you can imagine. More rules than words, actually. Trying to compute the sentence from these would simply swamp your working memory. Yet, anybody can say it with ease. How is that possible?
          </p>
          <p class="mb-4">
            There is a famous paper in cognitive psychology called “The Magical Number Seven Plus or Minus Two”. It looks at all the memory experiments and concludes that the most we can ever hold in our immediate or working memory at once is about 7 pieces of information. And research since then has suggested that it may be even less. As little as four. And nobody, not even the cleverest rocket scientists or chess grandmasters can do any better than anyone else.
          </p>
          <p class="mb-4">
            But the main lesson of the Magical Number Seven paper was not that there is a limit to the number of things you can keep in your head at the same time. The main lesson, and that is much more important and kind of amazing, was that there is no practical limit to the size of those pieces. You can take little pieces of information and chunk them up into bigger ones and on and on. And no matter how many you chunked together, they still only count as one in your working memory. Yes, <strong>chunks</strong> are the official technical term. But some people also call them mental representations.
          </p>
          <p class="mb-4">
            And that is exactly how we speak a language as native speakers. We do it with chunks. “How are you” is not three words and about twelve rules for your working memory. It is just one chunk. And it also turns out that people who are top performers in their field have been able to develop very large chunks or mental representations. They can see very complex situations as one thing or perform complicated actions almost as one. A concert pianist can look at a 12 bar section of dense notation and see it as one thing to play. A chess master can look at a chessboard and see the result in 12 moves not because they can calculate that fast but because they see it as one situation.
          </p>
          <p class="mb-4">
            It is the same with language. The things you need to learn, the things you need to practice are chunks. Not words, not rules. Chunks. The words and rules are just a way of describing the chunks to make them easier to talk about. But when linguists analyze language they find that the chunks are even more important than the rules for how we speak.
          </p>
          <p class="mb-4">
            What does that look like in practice? When you learn words, always learn them in context. Learn entire conversations to be as one in your mind. Learn phrases with gaps and how to fill them instead of complicated rules. For example, when you want to learn how to say “I have something”, don’t learn all the rules. Learn <em>I have _____</em>. and bunch of words that can go in that gap in the right form: <em>a book, a cup of coffee, a bottle of soda</em>. Note that you need to learn the whole bit, not just book but a book, not just coffee but a cup of coffee.
          </p>
          <p class="mb-4">
            Then that whole combination will become one chunk that you can manipulate without thinking. The rules will help you formulate the chunks but you are not learning them to use them while speaking. But more about that later.
          </p>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Long-Term Memory: The magical shopping bag and the Matthew Effect of Learning</h3>
          <p class="mb-4">
            There is something magical about your memory. The more you know, the more you can learn. It’s the exact opposite of a shopping bag. The more shopping you put in a bag, the less you can add. The space fills up until you can add no more. But your memory is exactly the opposite, the more you have there, the easier it is to add more.
          </p>
          <p class="mb-4">
            There are many people who speak five or more languages. None of them has ever said, I can’t learn another one, I don’t have enough memory left. They may not have enough time or motivation, but they always have enough memory. And they’re more likely to learn another one because it’s that much easier to do.
          </p>
          <p class="mb-4">
            It’s the Matthew Effect of learning. The Matthew Effect essentially means “The rich get richer, the poor get poorer.” or as it said in the Bible “To those who have, more will be given.” That’s a bad thing when it comes to poverty but a very good thing for learning. So as you’re learning more and more, it will be easier to learn more still.
          </p>
          <p class="mb-4">
            What does it mean in practice? Sometimes, to learn how to say something, you have to learn something else, as well. For example, a mnemonic device is something you learn alongside the word you’re learning. Maybe something that rhymes with it. When you learn somebody’s name, you don’t just learn the word. You learn the face, the situation, what job they have. And the more you know about a person, the easier it is to remember their name.
          </p>
          <p class="mb-4">
            It’s the same with language. Don’t be shy about learning more context for words than what you find in the dictionary. Find famous people who said the words, find five different sentences, songs, etc. The more you learn, the more you can learn.
          </p>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Scaffolding: Necessary but not sufficient</h3>
          <p class="mb-4">
            Not everything you'll need to learn or practice will actually be used when you speak. Just like when you’re building a house or a bridge, you need to build a scaffolding as you go higher, you need to do the same with learning a language. Or anything. Sometimes, it feels like the scaffolding is as elaborate and takes as much time to build as the bridge itself. Yes, but without it, there would be no bridge.
          </p>
          <p class="mb-4">
            You will have to spend quite a lot of time learning and practicing things that you will eventually have to take apart and throw away. For example, you will be learning vocabulary or grammatical rules to help you build up the chunks. But when you’re speaking or writing, reading or listening, you will not actually be using them. You will be using the chunks you built up.
          </p>
          <p class="mb-4">
            But, and this is the most important part, you must remember, the scaffolding is not your goal. And it is so easy to confuse it for your goal. A lot of people measure their success by how many words they memorised or how well they can do on a grammar test. And then they find out that they can’t get a sentence out or read simple instructions. That’s because the scaffolding is not the bridge you can cross a river on with all your baggage. That’s not what we speak with, even if it's maybe what you can pass an exam with.
          </p>
          <p class="mb-4">
            Remember, your goal is bigger, richer chunks. And if the scaffolding is not helping you build those, ditch it. Try something different.
          </p>
        `
      },
      {
        id: 'step-3',
        title: 'Step 3: Use good practice strategies',
        type: SectionType.CHAPTER,
        content: `
          <h2 class="text-2xl font-bold mb-4 text-slate-700">Step 3: Use good practice strategies</h2>
          <p class="mb-4">
            Now you know what you will practice, but how will you do it? Do you just find chunks to learn and repeat them until you know them? Not exactly. Nobody can just sit down and memorise thousands of chunks of language in a way that they can just show up in working memory as one. There will be a lot of repetition, for sure, but it must be targeted and deliberate. It must always be done with a purpose in mind.
          </p>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">General tips</h3>
          
          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Time: Focus and sprints</h4>
          <p class="mb-4">
            All your planning and attitude will be for nothing if you don’t put in the work. You MUST practice. That’s why this approach is called deliberate practice. You must put in the work. How much? How much is enough? How much is too much?
          </p>
          <p class="mb-4">
            Language learning takes longer than getting ready for your first 3-mile run. But we can still learn from running. So, let’s break our learning into training sprints. And after each sprint, we should achieve something tangible. See some measurable improvement. Be able to do something that seemed impossible to do at the start.
          </p>
          <p class="mb-4">
            There’s no perfect length of time for this, but let’s settle on 6 weeks. A month can be too short to see results and two months is too long to go without tangible results. You should plan to spend at least 20 hours of pure practice time during those six weeks. That’s less than an half an hour a day.
          </p>
          <p class="mb-4">
            You can take some rest days but you should practice at least half an hour most days. That will give you 20 hours. You can practice in even smaller chunks 10 minutes at a time but you MUST have at least some 30-minute practice sessions. And some longer ones.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Talk, talk, talk</h4>
          <p class="mb-4">
            You will need to talk. You’re trying to learn to speak the language after all. And you can only do that by talking. Talk to yourself, talk to objects in your house, talk to your fellow students, find somebody to do a language exchange with. If you’re in the country, find people in the street to ask them directions to the same place, over and over. Order things in a lot of restaurants.
          </p>
          <p class="mb-4">
            Always try to say something meaningful. Not deep, but meaningful. As you go about your daily life, keep an eye out for things you could say in the new language. Make a note and then practice saying them. Out loud. With the book closed. In different places. Sitting down and standing up. Singing out, whispering. Just sitting in a chair and repeating things is not enough.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Visualising</h4>
          <p class="mb-4">
            When you’re practicing you should also keep in mind that soon you will have to say something to someone. Often you have to practice on your own. But always imagine a situation where you’re actually saying this in real life. To a real person trying to get a real response. You don’t actually have to see them in your head. Just try to focus on the idea of saying it to someone in a real situation. You’ll be surprised how well that actually works.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Memorizing</h4>
          <p class="mb-4">
            Even though memorizing words is not language learning, it is necessary to build up the scaffolding you need to get there. So you will be doing a lot of that. Set aside at least 10 minutes every day when you’re memorising words. Make flashcards, use a flashcard app. And constantly quiz yourself. Your aim should be to learn at least 250 new words and phrases during your first learning sprint and then increase that by 50% with every other one.
          </p>
          <p class="mb-4">
            The good news is that this is actually easy. Apps like Memrise, Quizlet or Anki have this down to a literal science. It’s called Spaced Repetition and it will help you memorise words properly.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Comprehensible input</h4>
          <p class="mb-4">
            To learn a language, you need lots and lots of input. You need to experience a lot of the language you’re learning in its natural environment. But you can’t just listen in the background, let the language wash over you. You must actually understand a little bit of what’s going on. But not everything. So, you’re after are situations where you know what’s going on but that are just a little over your head. It’s been called i+1.
          </p>
          <p class="mb-4">
            So during your sessions with a native speaker always try to get to a place where you drive the conversation forward. Learn a lot of phrases that will trigger a response with more words. Things like <em>aha, yes, that’s interesting, really?, I didn’t know that., What next?, Can you tell me more?</em>
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Not knowing what’s going on</h4>
          <p class="mb-4">
            When you’re new to a language, your most common state of mind is confusion. People say things, or you try to read some text, and you just have no idea what’s going on. Nobody likes the feeling of being lost. Completely out of control. But you must practice getting comfortable with this feeling.
          </p>
          <p class="mb-4">
            If you always try to understand every single word, always want to be in control, you will never learn anything. You would get enough input. If you try to understand every word in a sentence, it will take up so much time, you won’t know what the conversation is about. Be on the lookout for that feeling of confusion and see if you can welcome it into yourself. Integrate it, it’s part of the process.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Getting feedback</h4>
          <p class="mb-4">
            If you want your practice to be effective, you must get feedback on how you’re doing. The sooner the better. That’s where your teacher is so helpful. They can notice issues, point you in better directions.
          </p>
          <p class="mb-4">
            But your teacher is not always there when you’re practicing. So learn to get feedback in other ways. Record yourself, exchange your recordings with others. You can also dictate into Google Docs to see how well it will understand your pronunciation.
          </p>
          <p class="mb-4">
            And once you get the feedback, you must act on it. Look for ways in which you can focus your next practice session on correcting what you were doing wrong. But also be prepared that it will not always be easy to fix in one go. So don’t obsess. A good rule of thumb for language learning success is: Never make the same mistake more than about 20 or 30 times.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Making associations and finding patterns</h4>
          <p class="mb-4">
            As you’re learning, always be on the look out for patterns and associations. You may find that a bunch of words have something in common, some shape, sound or similar context. Use that as a way to expand your vocabulary or others ways of speaking. Memory is all about associations.
          </p>
          <p class="mb-4">
            Many of these patterns are in described in textbooks or grammar books. Pay attention to them and learn as much as you can from them. But don’t wait to have someone tell you, look for your own. They don’t even have to be real patterns or accurate ones. Just something that will help you learn.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Measure your progress</h4>
          <p class="mb-4">
            You need to get lots of immediate feedback to make the most out of your practice. But you also need to measure progress over days and weeks. Again, the best way is to make a recording of yourself speaking. Compare it to a new one a week later, a month later, and so on.
          </p>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Specific skills</h3>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Reading</h4>
          <p class="mb-4">
            A good way of getting a lot of input is reading. Even if you’re just trying to learn to speak, you can get a lot more input by reading. Reading is essential. Of course, at the beginning, you won’t find too many texts you can understand. Not the sorts of things you want to read. But that’s because you’re looking in the wrong places.
          </p>
          <p class="mb-4">
            The world around you is filled with signs with words on them. They always say important things. And if you’re not in the right country, there’s the internet. Advertising is great. There are often very simple phrases in it such as Come to our store, Get ready for the discount, We have the best prices, etc.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Reading modes</h4>
          <p class="mb-4">
            There are different modes of reading. People mostly think of reading as if reading a story or magazine article. You sit down and read from beginning to end. But that can be very hard and discouraging in a new language until your vocabulary has grown.
          </p>
          <p class="mb-4"><strong>1. Pre-reading activities: Interlinear glosses</strong></p>
          <p class="mb-4">
            Break reading into pre-reading and reading. One of your pre-reading activities would be simply to spend some time with the text and a dictionary looking up words you don’t know. Don’t try to read the text, just scan for unknown words. Then write the translation above them or below them in small letters.
          </p>
          <p class="mb-4"><strong>2. Skimming and scanning: Reading for gist and details</strong></p>
          <p class="mb-4">
            While you need to do some extensive reading, that’s not actually how most people read most texts. Be it instructions or newspaper articles, most of the time people only skim them to get the gist or scan through them to get to an important detail.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Listening</h4>
          <p class="mb-4">
            You can’t speak without listening. No one can. Even if it may sometimes seem otherwise. But of all the language learning activities, listening is the hardest. You can’t easily skip around, pause, or look a little ahead to see what’s coming. You are not in control at all. But you have to do it.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Writing</h4>
          <p class="mb-4">
            You need to start writing as soon as possible. There are two kinds of writing. 1. Writing things down. You need that to take notes. 2. Writing to express ideas. You will do that less as a beginner but you should try. For example, keeping a simple diary.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">How to practice vocabulary the right way with collocations</h4>
          <p class="mb-4">
            Language is mostly words. So you have to learn them. You have to learn a lot of them. You should aim to know 1000 words as soon as possible. Not all actively but at least have some notion they exist. And once you get to 2000, things become much easier.
          </p>
          <p class="mb-4">
            Knowing words and speaking the language are not the same things. But you cannot speak without knowing them. And cramming them is the only known way to scale up fast. The good news is that the more words you know, the easier it will be to pick up new ones. Eventually, you’ll just suss them out of context. But first you need to jump start the process by cramming. Sorry.
          </p>
          <p class="mb-4">
            You will have to do some flashcard work here. But you should very soon start using the words in context. Because in real life, words are never alone. But here’s some good news. Words often have preferred companions. Other words they appear next to more often than others. Because they appear in the same location, they are called <strong>collocations</strong>.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">When and how should you use grammar: The monitor approach</h4>
          <p class="mb-4">
            “Do I need to learn grammar?” is a common question people ask. The answer is yes because grammar helps you monitor your performance. But you should only learn it for that purpose. As you go about building bigger and bigger chunks, you’ll find out that you want to learn some shortcuts for making sense of them. And rules of grammar are such shortcuts. They are what other people discovered to help them understand the way they speak. Use that, learn from it. But don’t make it your goal (unless you are interested in grammar which is its own reward but is not connected to language learning skills.).
          </p>
          <p class="mb-4">
            Remember, nobody speaks by looking up words in their mind and applying grammatical rules to them. It’s impossible because of the limitations of working memory. People may occasionally pause and think about a rule that can be applied if they get stuck. But that is very rarely otherwise everybody would be permanently tongue-tied.
          </p>
          <p class="mb-4">
            Think of grammar as a recipe. You’ve probably had the experience of trying to cook something from a recipe for the first time. The recipe says the preparation time is 15 minutes but you take more than twice as long and the food isn’t very good. That’s because everything in the recipe is new and you are going very slowly. You have to think about every little step. Plus you’re checking the recipe after almost every step, because the few times you don’t, you did it wrong. Chefs don’t cook like that. They already have all the moves baked into their body and they just move very quickly.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Improving your pronunciation</h4>
          <p class="mb-4">
            If this all learning is about chunking, pronunciation is even more so. It is the chunks other chunks are made from. Pronunciation even has its own grammar with lots of rules. But you should only learn very few of them to help you get unstuck.
          </p>
          <p class="mb-4">There are three key things you need to know about pronunciation:</p>
          <ol class="list-decimal ml-6 space-y-2 mb-4 text-slate-700">
            <li>Sounds are never pronounced in isolation so you shouldn’t practice them like that for too long.</li>
            <li>Sounds are pronounced differently in different contexts.</li>
            <li>You’re not just pronouncing the sounds, you’re pronouncing syllables, phrases and sentences. They have their own pronunciation. These are called stress and intonation. And they are even more important than the individual sounds.</li>
          </ol>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Slow down, speed up, shake it all about: The benefits of feeling silly</h4>
          <p class="mb-4">
            So far, we’ve been talking about practicing as if it’s just a matter of repetition. But that’s not nearly as effective as varying what you do. Whether you’re learning words, dialog structures, intonation patterns, or grammar constructions, you must never just repeat them. You should repeat them in lots of different ways, places or contexts. Here are some ideas:
          </p>
          <ul class="list-disc ml-6 space-y-1 mb-4 text-slate-700">
            <li>Say what you’re saying at different speeds. Very slowly, very fast.</li>
            <li>Use different emotions. Speak happily, angrily, sadly.</li>
            <li>Whisper and shout.</li>
            <li>Sit down, stand up, lie down when repeating words or phrases.</li>
            <li>Speak into a mirror</li>
            <li>Have conversations with inanimate objects</li>
            <li>Sing and chant</li>
          </ul>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Tools</h3>
          <p class="mb-4">
            There are lots of tools you can use to make this process easier and also more effective. But remember, like any tool, they will only be useful if you learn to use them. You cannot just click a link or install an app. You have to investigate how it works, how people use it, and develop some fluency with the tool. And that’s a mini learning project on its own. But it is well worth it.
          </p>
          
          <div class="space-y-4">
            <div>
                <h4 class="font-bold text-emerald-800">Google Translate</h4>
                <p class="text-sm">First, the phone and tablet apps can be used to quickly generate a bunch of words and phrases and then practice them with flashcards. It’s not a replacement for a good flashcard app but it may do at a pinch. But much more helpfully. You can use them to help you generate some ideas for a conversation.</p>
            </div>
            <div>
                <h4 class="font-bold text-emerald-800">GT4T - Translation tool that you can use to learn</h4>
                <p class="text-sm">GT4T (Google Translate for Translators) is a free tool designed to help translators but you can use it to help you translate foreign language texts without having to look things up in a dictionary all the time.</p>
            </div>
            <div>
                <h4 class="font-bold text-emerald-800">Phonetic Guide in Microsoft Word</h4>
                <p class="text-sm">If you’re preparing a text for reading by adding glosses to words, such as their meanings, between the lines (see above), you can use a hidden feature in Microsoft Word called Phonetic Guide. It was designed for annotating Chinese and Japanese characters but it can be used with text in any language.</p>
            </div>
            <div>
                <h4 class="font-bold text-emerald-800">Google Docs Voice Typing</h4>
                <p class="text-sm">Google Docs has a great feature called Voice Typing. It works both on the web and on the phone app. It’s a dictation feature that works in almost a hundred languages and this includes all the main languages that a lot of people write in. It’s great for practicing pronunciation on your own.</p>
            </div>
            <div>
                <h4 class="font-bold text-emerald-800">Flashcard and other language apps</h4>
                <p class="text-sm">Flashcards will be the cornerstone of your learning. That’s how you build up the scaffolding of vocabulary and phrases you can build real fluency with. Apps like Memrise, Quizlet or Anki have this down to a literal science. It’s called Spaced Repetition.</p>
            </div>
            <div>
                <h4 class="font-bold text-emerald-800">Language Exchanges</h4>
                <p class="text-sm">If you don’t live in the country and don’t have access to lots of native speakers, a language exchange is what you need. Apps: Tandem, HiNative, HelloTalk.</p>
            </div>
            <div>
                <h4 class="font-bold text-emerald-800">Voice Thread</h4>
                <p class="text-sm">VoiceThread is great if you want to continue practicing with your classmates outside the lesson. It’s essentially a way to have an asynchronous conversation.</p>
            </div>
            <div>
                <h4 class="font-bold text-emerald-800">Recording apps</h4>
                <p class="text-sm">You MUST record yourself speaking. Listen to yourself at different stages of your progress and compare how well you’re doing.</p>
            </div>
            <div>
                <h4 class="font-bold text-emerald-800">Online corpus: The dictionary killer</h4>
                <p class="text-sm">A corpus is a collection of millions of words of written and spoken language. It is the best source of examples and information about language.</p>
            </div>
            <div>
                <h4 class="font-bold text-emerald-800">Swift Key and other keyboard apps</h4>
                <p class="text-sm">Even if you’re not learning to write, you need to learn how to type. The best keyboard for the phone when using multiple languages is Swift Key.</p>
            </div>
          </div>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Commitment: Don’t cheat yourself</h3>
          <p class="mb-4">
            If you go on Good Reads Quotes and search for self-deception, you will find 177 quotes from people across history that all essentially boil down to the same thing: Nobody is as easy to deceive as yourself.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Displacement activities</h4>
          <p class="mb-4">
            Doing activities like making flashcards, getting your books ready, choosing the right exercises for practice. Those are all necessary but they don’t contribute to learning. It may feel like you are doing something useful and you are but just not learning. It’s the same as putting on your running gear and deciding on a course does not make you any fast or healthier. It does not count against the running time.
          </p>
          
          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Confusing recognition for recall</h4>
          <p class="mb-4">
            This is a common problem for students. You’re looking at something in your book or on your memorisation app and it looks like you know it so well, as if you could never forget it. And then someone asks you, and you draw a complete blank.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Confusing studying for learning</h4>
          <p class="mb-4">
            Another common way is to confuse doing the sort of thing that students do for learning. You’re reading a book or to class and it feels like that’s enough for learning. And you feel like you’re doing all you can and the rest is the responsibility of the book or the teacher.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Working with others: Virtual study space</h4>
          <p class="mb-4">
            Working with others is necessary for language learning. You need conversation partners and you need someone to give you feedback. But you can also use others to help you keep to you practice routine. You can simply check in with others when you’re about to start studying. Give each other progress reports. But a really good way is to set up a virtual study space.
          </p>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Get started: Plan, execute and find enjoyment</h3>
          <p class="mb-4">
            So, now comes the hard part. You have to get started. You must make a plan. Schedule all your practice sessions in your diary or planner. You must not leave this for your free time. Make sure it is on your schedule alongside all other duties.
          </p>
          <p class="mb-4">
            Find people to help you. Look for native speakers who can give you feedback. Agree with your teacher about the support they can offer. Agree with your classmates.
          </p>
          <p class="mb-4">
            Then get started. Don’t skip, don’t cheat yourself. Find time to talk with others about your frustrations and get some tips about how to overcome them.
          </p>
          <p class="mb-4">
            And above all work very hard to find enjoyment in the process. Even if some of it is kind of gruelling, the results are worth it. But even you can even find joy in the process. See if you can catch that language learner’s high.
          </p>
        `
      }
    ]
  },
  {
    id: 'fine-tuning-aims',
    title: 'Fine-tuning your aims',
    type: SectionType.CHAPTER,
    content: `
      <h2 class="text-2xl font-bold mb-4 text-slate-700">Fine-tuning your language learning aims</h2>
      <p class="mb-4">
        As you’re deciding on what you’d like to achieve in your language learning, you can use the famous Common European Frame of Reference (CEFR) to help you. It was designed specifically to help learners evaluate where they are and where they want to go.
      </p>

      <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Summary chart</h3>
      <p class="mb-4">
        This chart compares the general descriptions of each of the 6 CEFR levels. For each level, there’s a description of what it means for you in practice and the sort of things you have to do to get there.
      </p>
      <p class="mb-4">
        There are three levels with 2 sub-levels each. The levels are marked by letters to make them easier to translate but their names help you understand what is meant by them.
      </p>
      <ul class="list-none ml-4 mb-4 space-y-1">
        <li><strong>Level A:</strong> Basic user</li>
        <li><strong>Level B:</strong> Independent user</li>
        <li><strong>Level C:</strong> Proficient user</li>
      </ul>
      <p class="mb-4">
        The level descriptors are from the <a href="https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">official CEFR website</a> which also contains translations into other languages. There you can also find more detailed <a href="https://www.coe.int/en/web/common-european-framework-reference-languages/table-2-cefr-3.3-common-reference-levels-self-assessment-grid" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">Self-Assessment Grids</a> that break it down into multiple language modes – reading, writing, listening and speaking.
      </p>
      <p class="mb-4">
        You can get a sense of what this could mean in practice by looking at the <a href="http://www.englishprofile.org" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">level specification for English</a>. There you can see the sort of vocabulary and grammar that may be expected at each level. But do not take them as checklists, they are just illustrations.
      </p>

      <div class="overflow-x-auto my-8 shadow-sm rounded-lg border border-slate-200">
        <table class="min-w-full text-sm text-left text-slate-600 border-collapse">
          <thead class="text-xs text-slate-700 uppercase bg-slate-100">
            <tr>
              <th class="px-6 py-3 border-b border-slate-200">Level and descriptor</th>
              <th class="px-6 py-3 border-b border-slate-200">What you can do</th>
              <th class="px-6 py-3 border-b border-slate-200">What you have to do to get there</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-200">
            <tr>
              <td class="px-6 py-4 font-medium text-slate-900 align-top bg-slate-50/50">
                <strong>A1:</strong> Can understand and use <strong>familiar everyday expressions</strong> and very basic phrases aimed at the satisfaction of needs of a concrete type. Can introduce him/herself and others and can ask and answer questions about personal details such as where he/she lives, people he/she knows and things he/she has. Can <strong>interact in a simple way</strong> provided the <strong>other person talks slowly</strong> and clearly and is prepared to help.
              </td>
              <td class="px-6 py-4 align-top">
                You can get around as a very <strong>advanced tourist</strong> while most of your interaction will be in English.<br/><br/>
                You don’t really know the language, but you go beyond just memorising the barest minimum of words as a visitor to a country may do before a holiday.<br/><br/>
                You will be fishing for words all the time and feel lost in almost any situation.<br/><br/>
                In the old terminology, this used to be called the **Breakthrough level**. You break through just being a tourist with a few words into having some very basic facility with the language but not much more.
              </td>
              <td class="px-6 py-4 align-top">
                You can probably get to this level with an app like Duolingo, Memrise or a phrasebook. You can get by with <strong>raw memorisation of phrases and words</strong> with some minimal awareness of how they change (like plural - not enough to even call it grammar).<br/><br/>
                You can probably get by with several <strong>hundred words or phrases</strong> and <strong>almost no grammar</strong>. You can take a class or work with a private tutor.<br/><br/>
                You can get to this level in <strong>a few weeks or months</strong>.<br/><br/>
                It will take more than a weekend with a phrasebook and some listening before you travel to a foreign country. But not much more.
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 font-medium text-slate-900 align-top bg-slate-50/50">
                <strong>A2:</strong> Can <strong>understand sentences and frequently used expressions</strong> related to areas of <strong>most immediate relevance</strong> (e.g., very basic personal and family information, shopping, local geography, employment). Can communicate in <strong>simple and routine tasks</strong> requiring a simple and direct exchange of information on familiar and routine matters. Can describe in simple terms aspects of his/her background, immediate environment and matters in areas of <strong>immediate need</strong>.
              </td>
              <td class="px-6 py-4 align-top">
                You can <strong>live in the country and get by</strong> in basic situations on your own but will need <strong>English for anything even a bit complicated</strong>. You can probably book a hotel but not negotiate the renting of an apartment.<br/><br/>
                You will feel almost completely lost in any situation where fluent Czech is being spoken in a group without taking you into account.<br/><br/>
                You can make friends and they will occasionally humor you and speak Czech to you.<br/><br/>
                You could probably <strong>work at a till</strong> in a shop or in a place with quite predictable routines.<br/><br/>
                This used to be called the <strong>‘Waystage’ level</strong>. It is really a stage on the way to something more.
              </td>
              <td class="px-6 py-4 align-top">
                You have to do some amount of <strong>studying, taking a class, practicing</strong> on your own, having <strong>interactions with actual native speakers</strong>.<br/><br/>
                You will need to have an <strong>active vocabulary</strong> of about <strong>700 words</strong> and maybe another <strong>1000 passive</strong>.<br/><br/>
                You will need to know <strong>some grammar</strong> but well over half of what you say will be incorrect. <strong>Vocabulary</strong> is still more important.<br/><br/>
                You can probably get to this level in about <strong>2-3 months of fairly intensive study</strong> with some interactions with native speakers. But if you only take a typical class of a few hours a week and some homework, it could be <strong>a whole year</strong> or even more.
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 font-medium text-slate-900 align-top bg-slate-50/50">
                <strong>B1:</strong> Can <strong>understand the main points</strong> of clear <strong>standard input</strong> on <strong>familiar matters</strong> regularly encountered in work, school, leisure, etc. Can <strong>deal with most situations</strong> likely to arise whilst <strong>travelling</strong> in an area where the language is spoken. Can produce <strong>simple connected text</strong> on topics which are familiar or of <strong>personal interest</strong>. Can describe experiences and events, dreams, hopes & ambitions and briefly give reasons and explanations for opinions and plans.
              </td>
              <td class="px-6 py-4 align-top">
                You can finally <strong>live in the country without relying on English</strong> for anything complicated. But you would probably still need an interpreter in a business negotiation.<br/><br/>
                You can go out with a group of friends and they may feel they can have a conversation without constantly thinking about you. But you will still feel lost for a lot of it.<br/><br/>
                You could probably do a <strong>low-level office or manual job</strong> where more is required than a few sentences.<br/><br/>
                An outside observer would think of you as fluent (Benny Lewis’ “Fluent in Three Months” considers this a realistic level to shoot for.)<br/><br/>
                This is the <strong>“Threshold” level</strong>, you’re really on the cusp of becoming a proficient but not there yet.
              </td>
              <td class="px-6 py-4 align-top">
                You will need to <strong>put yourself out there</strong>. Have a <strong>lot of conversations</strong> with people. Be serious about getting a <strong>lot of words</strong> in - shoot for <strong>1500 active</strong> and another <strong>1-2 thousand passive</strong>.<br/><br/>
                You will need to <strong>study some grammar</strong>. Not systematically but enough to help you string the words together.<br/><br/>
                You will need to very seriously <strong>reflect on your learning</strong>.<br/><br/>
                You can probably achieve this level in <strong>six months</strong> if you’re dedicated and serious and get a lot of input. But realistically, you would need <strong>a year</strong>.<br/><br/>
                You would definitely benefit from a <strong>summer school</strong> or two in the country and/or a language exchange.
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 font-medium text-slate-900 align-top bg-slate-50/50">
                <strong>B2:</strong> Can <strong>understand the main ideas of complex text</strong> on both concrete and abstract topics, including technical discussions in his/her field of specialisation. Can <strong>interact with a degree of fluency</strong> and spontaneity that makes regular interaction with native speakers quite possible without strain for either party. Can produce <strong>clear, detailed text on a wide range of subjects</strong> and explain a viewpoint on a topical issue giving the advantages and disadvantages of various options.
              </td>
              <td class="px-6 py-4 align-top">
                This is the level at which you could just about <strong>study at University</strong>. You can probably hold a <strong>typical office job</strong> where a lot of writing is not required.<br/><br/>
                You can certainly <strong>live in the country fairly comfortably</strong> without too much English. You’d still definitely want an interpreter for a legal proceeding or a serious business negotiation.<br/><br/>
                You can <strong>watch the news</strong>, films and read a thriller but you will often <strong>have gaps</strong>. Anything very complicated or subtle will still elude you.<br/><br/>
                You can go out with a group of friends and they will almost never feel they have to think about you not being a native speaker.<br/><br/>
                You may have a <strong>heavy accent</strong>, but you could <strong>make a presentation or an announcement</strong> and people would understand you without having to struggle.<br/><br/>
                This used to be called the <strong>“vantage” level</strong>. This means that you have a new perspective on the language, and this is a significant step up from B1. Much more than from A2 to B1.
              </td>
              <td class="px-6 py-4 align-top">
                This is the real <strong>step to feeling at home</strong> in the language. And you will need a lot of effort to get there. Many people never do.<br/><br/>
                You can’t just get to this level by memorising words and phrases and having conversations. You will have to <strong>get a lot of input</strong>. <strong>Watch and listen</strong> to the news and do at least <strong>some reading</strong>. You’re not just memorising words at this stage, you are building bigger chunks and ways of expression that go beyond what you can read in a textbook (even if a textbook will still be useful).<br/><br/>
                You can’t get by without <strong>thinking about the structure of the language</strong> and some grammar. You will probably benefit from thinking about your native language, too.<br/><br/>
                You could do it in <strong>a year of dedication</strong> but taking <strong>two or three</strong> would not be anything to ashamed of. Spending some <strong>time in the country</strong> would greatly accelerate your progress.
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 font-medium text-slate-900 align-top bg-slate-50/50">
                <strong>C1:</strong> Can <strong>understand a wide range of demanding, longer texts</strong>, and recognise implicit meaning. Can <strong>express him/herself fluently</strong> and spontaneously without much obvious searching for expressions. Can use language flexibly and effectively for social, academic and professional purposes. Can produce clear, well-structured, detailed text on complex subjects, showing controlled use of organisational patterns, connectors and cohesive devices.
              </td>
              <td class="px-6 py-4 align-top">
                This it. You can <strong>comfortably study at a university and hold any office job</strong>. You could <strong>run a company</strong>, talk to the police even in a stressful situation. You could be a <strong>nurse or a doctor treating patients</strong>. You could <strong>teach a class</strong> or give a speech.<br/><br/>
                You will be easily recognisable as a non-native speaker, but it won’t get in the way of your interactions.<br/><br/>
                Many people <strong>live at that level for many years</strong> in a country, have romantic relationships, marriages, and <strong>successful careers</strong>.<br/><br/>
                You will understand a lot of subtlety and many language jokes but will occasionally be out of your depth.<br/><br/>
                But basically, you will feel comfortable speaking and will not have a lot of anxiety about having to speak.<br/><br/>
                This level used to be called <strong>“Effective Operational Proficiency”</strong> which is fairly descriptive.
              </td>
              <td class="px-6 py-4 align-top">
                <strong>Reading</strong> and a lot of it. That’s the only way you can get to this level. Watching films or TV shows probably won’t be enough. You will have to have watched documentaries, lectures in the language.<br/><br/>
                And probably you will have <strong>read a novel or two</strong> and some non-fiction. Or at least a lot of magazine articles. If you don’t like reading (and there’s no shame in that), try <strong>audiobooks and podcasts</strong>.<br/><br/>
                The name of the game is <strong>lots of varied high-quality input</strong>. The sort of thing that happens to native speakers.<br/><br/>
                You will have also done a <strong>lot of writing</strong>. Not just for class but emails, blog posts, anything.<br/><br/>
                And you will have to pay <strong>attention to correctness</strong> in grammar and pronunciation. Much of it will come naturally from the input but you will help yourself by thinking about it more formally. Some basic terminology will be very helpful.<br/><br/>
                At this and the next stage you will know or recognise anywhere between <strong>7 and 15 thousand words or phrases</strong>. But you won’t have learned most of them by memorising them from the textbook. You will have a <strong>rich enough background in the language and culture</strong> that you can usually figure out the meaning from context without even thinking about it. You will sometimes have to look things up in a dictionary but that will be less and less necessary as your awareness of how the language works grows richer.<br/><br/>
                You will probably come to the realisation that is the core of modern linguistics. The way one language does things is not more natural than another. This will help you ‘let go’ and reduce the amount of interference from your native language. When you switch between the two languages, you may <strong>feel almost like a different person</strong>. Like having two homes. Both different but equally welcoming.
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 font-medium text-slate-900 align-top bg-slate-50/50">
                <strong>C2:</strong> Can <strong>understand with ease virtually everything heard or read</strong>. Can summarise information from different spoken and written sources, reconstructing arguments and accounts in a coherent presentation. Can <strong>express him/herself spontaneously, very fluently and precisely</strong>, differentiating finer shades of meaning even in more complex situations.
              </td>
              <td class="px-6 py-4 align-top">
                You can <strong>study for a PhD</strong>. You may still need somebody to proofread your thesis, but you can write it. You could <strong>run for office</strong> or have a <strong>high-level government job</strong> at this level.<br/><br/>
                You will probably still have an accent, but it will be slight and hardly worth notice. Without the accent nobody would notice you’re not a native speaker even if you might still make a few errors when you try to speak very fast.<br/><br/>
                But you will <strong>understand pretty much any subtle allusion</strong> somebody may throw at you. And you will be able to tell apart regionalisms and different accents even if not as perfectly as a native speaker.<br/><br/>
                The old name for this level <strong>“Mastery”</strong> says it all.<br/><br/>
                This is not necessarily meant to be native-speaker level. But you will <strong>exceed the skills of some native speakers</strong> in some domains.
              </td>
              <td class="px-6 py-4 align-top">
                You will probably need to do <strong>a lot of writing</strong> and maybe formal speaking to get to this level. While you need <strong>lots of reading or watching</strong> to get to the previous level, here you also need to <strong>focus on producing</strong>.<br/><br/>
                It is possible to only <strong>function at this level in some contexts</strong>. But you will need a lot of breadth and depth even so.<br/><br/>
                Many native speakers don’t really function at this level across all subjects. If you achieve this level (apart from the slight accent), you will be better at speaking the language in certain areas than some native speakers.<br/><br/>
                You will probably need at least <strong>four years</strong> to get to this level. But it could be more. You will never reach this level if you just take classes. You will need to <strong>immerse yourself in the language</strong> for long periods of time. Not necessarily live in the country but spend a lot of time “living” in the language. Much of what you read, or watch will be in that language for a while.<br/><br/>
                You will have to also have <strong>a lot more cultural context</strong> than in the previous levels to get the various references. Watching historical films, current TV shows, following the news in the language, all of that will help. It’s not enough to just have friends or even be married to someone who speaks the language.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-xl font-bold mt-8 mb-4 text-slate-700">Notes on the levels</h3>
      
      <h4 class="font-bold mt-6 mb-2 text-emerald-800">Speaking, Listening, Reading, Writing</h4>
      <p class="mb-4">
        These are just general descriptions of the level of proficiency at each level. They are then broken down into speaking, listening, reading and writing. You can be at different levels of each. You will find the <a href="https://www.coe.int/en/web/common-european-framework-reference-languages/table-2-cefr-3.3-common-reference-levels-self-assessment-grid" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">Self-Assessment Grids</a> on the EU website.
      </p>
      <p class="mb-4">
        Don’t expect to reach the same level in each mode at the same time. Writing often takes much more time than speaking or reading.
      </p>
      <p class="mb-4">
        For example, many academics can read at level C2, write at C1 and speak at B2 or even B1. But even at each level their skills will be different in different domains. They may be able to read a dense academic book with ease but not get much enjoyment out of a novel. As one Czech philosopher used to say “You can learn enough German to read Kant over the summer. But not to read a newspaper.”
      </p>

      <h4 class="font-bold mt-6 mb-2 text-emerald-800">Time and effort to reach the levels</h4>
      <p class="mb-4">
        Also, the amount you need to learn for each level increases exponentially. Think of it like an ice cream cone. You need much less ice cream to fill the same height at the bottom than at the top. That means that you cannot plan your learning by years of study such as reaching level A1 in one year, A2 the year after and be at level B2 by year four. You can get to B2 much faster than four years but not if it takes you the whole year to get to A1.
      </p>

      <!-- Visualization of the Cone/Inverted Pyramid -->
      <div class="my-10 flex justify-center">
        <svg viewBox="0 0 600 500" class="w-full max-w-2xl">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#86efac;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#4ade80;stop-opacity:1" />
            </linearGradient>
          </defs>
          
          <!-- The Triangle Body -->
          <path d="M 50 20 L 550 20 L 300 480 Z" fill="url(#grad1)" stroke="#166534" stroke-width="3" />
          
          <!-- Separator Lines (Dashed) -->
          <line x1="110" y1="97" x2="490" y2="97" stroke="black" stroke-width="1" stroke-dasharray="4 4" />
          <line x1="152" y1="173" x2="448" y2="173" stroke="black" stroke-width="1" stroke-dasharray="4 4" />
          <line x1="193" y1="250" x2="407" y2="250" stroke="black" stroke-width="1" stroke-dasharray="4 4" />
          <line x1="235" y1="327" x2="365" y2="327" stroke="black" stroke-width="1" stroke-dasharray="4 4" />
          <line x1="277" y1="403" x2="323" y2="403" stroke="black" stroke-width="1" stroke-dasharray="4 4" />

          <!-- Level Labels -->
          <text x="300" y="70" font-family="sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="#064e3b">C2</text>
          <text x="300" y="145" font-family="sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="#064e3b">C1</text>
          <text x="300" y="220" font-family="sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="#064e3b">B2</text>
          <text x="300" y="295" font-family="sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="#064e3b">B1</text>
          <text x="300" y="370" font-family="sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="#064e3b">A2</text>
          <text x="300" y="445" font-family="sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="#064e3b">A1</text>

          <!-- Time Labels (Right Side) -->
          <!-- Guide lines for text -->
          <line x1="550" y1="20" x2="580" y2="20" stroke="#78350f" stroke-width="2" stroke-dasharray="4 4" />
          <line x1="490" y1="97" x2="580" y2="97" stroke="#78350f" stroke-width="2" stroke-dasharray="4 4" />
          <line x1="448" y1="173" x2="580" y2="173" stroke="#78350f" stroke-width="2" stroke-dasharray="4 4" />
          <line x1="407" y1="250" x2="580" y2="250" stroke="#78350f" stroke-width="2" stroke-dasharray="4 4" />
          <line x1="365" y1="327" x2="580" y2="327" stroke="#78350f" stroke-width="2" stroke-dasharray="4 4" />
          <line x1="323" y1="403" x2="580" y2="403" stroke="#78350f" stroke-width="2" stroke-dasharray="4 4" />
          <line x1="300" y1="480" x2="580" y2="480" stroke="#78350f" stroke-width="2" stroke-dasharray="4 4" />

          <!-- Vertical dashed line on right -->
          <line x1="580" y1="20" x2="580" y2="480" stroke="#78350f" stroke-width="2" stroke-dasharray="8 4" marker-start="url(#arrow)" marker-end="url(#arrow)" />
          
          <!-- Text -->
          <text x="570" y="65" font-family="sans-serif" font-size="16" text-anchor="end" fill="black">4 - 8 years</text>
          <text x="570" y="140" font-family="sans-serif" font-size="16" text-anchor="end" fill="black">3 - 4 years</text>
          <text x="570" y="215" font-family="sans-serif" font-size="16" text-anchor="end" fill="black">2 - 3 years</text>
          <text x="570" y="290" font-family="sans-serif" font-size="16" text-anchor="end" fill="black">6 months - 1 year</text>
          <text x="570" y="365" font-family="sans-serif" font-size="16" text-anchor="end" fill="black">3 - 6 months</text>
          <text x="570" y="440" font-family="sans-serif" font-size="16" text-anchor="end" fill="black">4 weeks - 3 months</text>
          
          <!-- Arrows definitions -->
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10" fill="#78350f" />
          </marker>
        </svg>
      </div>

      <p class="mb-4">
        This table illustrates the progression and the possible amount of time it could take to reach each level. These are just estimates, not based on research. You can accelerate your progress with deliberate practice (particularly at the lower levels) or you could take much longer if you just follow a textbook and go to class for a few hours a week.
      </p>
      <p class="mb-4">
        Also, you can progress faster in some areas than others. You may already have some good speaking competence which you can bootstrap into higher proficiency much faster.
      </p>
      <p class="mb-4">
        Children who grew up speaking the language and may only be at level C1 in listening but can speak at B1 or B2 in certain domains, can probably get to C1 or C2 in a year or two if they focus on getting enough of high-quality input and monitor their progress in a deliberate way.
      </p>

      <h4 class="font-bold mt-6 mb-2 text-emerald-800">Sub-levels</h4>
      <p class="mb-4">
        Sometimes, the levels may seem quite broad and daunting. Especially, as you go higher up the scale. There is a similar framework called ACTFL that solved this issue by dividing each level into Low, Mid and High.
      </p>
      <ul class="list-disc ml-6 space-y-2 mb-4 text-slate-700">
        <li><strong>Low</strong> - can only function at the level in very limited domains</li>
        <li><strong>Mid</strong> - can solidly function at the level but not much more</li>
        <li><strong>High</strong> - can function at the higher level in a few areas</li>
      </ul>
      <p class="mb-4">
        You can think of being a low B1 in speaking but high B1 in listening and overall feel mid B1. This is not an official part of the CEFR levels (although you will sometimes see A2.1 or B1.2) but it can be useful to help you better assess where you are and where you’re going.
      </p>

      <h4 class="font-bold mt-6 mb-2 text-emerald-800">Differences between speakers at each level</h4>
      <p class="mb-4">
        Finally, the higher up you go in the levels, there will be more differences between people who achieved at the same level. They will have reached them through different routes and will have slightly different knowledge. Just like native speakers are all different depending on age, education or the sort of environment they live and work in.
      </p>
      <p class="mb-4">
        What matters is what you can do with the language to meet your communicative goals. As the levels go up, you need to pay more attention to how you say things but it does not matter exactly how many words you know or how well you can complete grammar exercises in a textbook.
      </p>
    `
  },
  {
    id: 'appendices',
    title: 'Appendices',
    type: SectionType.CONTAINER,
    defaultExpanded: false,
    content: '<h1 class="text-3xl font-bold mb-6 text-emerald-800">Appendices</h1>',
    children: [
      {
        id: 'appendix-3',
        title: 'Appendix 1: Building your Czech muscle',
        type: SectionType.APPENDIX,
        content: `
          <h2 class="text-2xl font-bold mb-4 text-slate-700">Appendix 2: Building your Czech muscle</h2>
          <p class="mb-4">
            This guide introduces strategies and guides that are specifically useful for students of Czech. Some of the strategies may also be useful for students of other Slavic languages.
          </p>
          <!-- Rest of Appendix 3 content -->
          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Czech grammar muscle</h3>
          <!-- ... (Content truncated for brevity in this display, but assumed full from previous context) ... -->
           <h4 class="font-bold mt-4 mb-2 text-emerald-800">Cases</h4>
          <p class="mb-4">
            If you’re reading this, you already know that Czech words change their form. A lot. In fact, most of the time you encounter a word, it is going to be in another form. There are 14 possible forms for any Czech noun, adjective or pronoun and even number depending on where in the sentence it is used. But no word actually has 14 different forms. For instance, the plural for a word like water (voda) is the same as the form that you get when it follows the preposition <em>from</em> (z vody). Paradoxically, this makes it even more confusing.
          </p>
          <p class="mb-4">
            You probably already know that is called cases. Officially, Czech has 7 cases and they have different forms in singular and plural which gives you the 14 forms. You can read more about cases in the Czech Navigator which will show you all the different forms and how they work.
          </p>
          <!-- ... -->
           <h4 class="font-bold mt-4 mb-2 text-emerald-800">Aspect</h4>
          <p class="mb-4">
            So that takes care of the first of the two biggest issue learners run into. The other one is aspect. It is worse because it is much less rule based. It is similar to what happens in English with the difference between <em>I have seen</em> and <em>I saw</em>. It has to do with whether the action is completed or ongoing which sounds simple enough but in practice almost anything can happen.
          </p>
          <p class="mb-4">
            But even here, there’s a hack that can make it easier. Learn the aspect in context. That is too much to explain here but the Czech Navigator will explain how it works. But again when you practice, don’t just learn the verb, learn the most common context.
          </p>
          <p class="mb-4">
            What you will then need to do, is find examples of those sentences in context and use them to learn from.
          </p>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Czech vocabulary muscle</h3>
          <p class="mb-4">
            The grammar of Czech may seem like it will take you most of the time but it shouldn’t. It will take you a bit more time to get started but after a while it should be no different from any other language. Czech children do not take any longer to learn Czech grammar than English children take to learn their own grammar, so why should you be any different?
          </p>
          <p class="mb-4">
            But no matter how much time you spend worrying about the grammar, you need to think about building up your vocabulary above all. There are two things that can help you: 1. collocations and 2. word building prefixes and suffixes.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Czech collocations</h4>
          <p class="mb-4">
            Collocations are words that appear more frequently alongside each other. So when you’re learning a word, learn some common words that often show up nearby. For example, this is what you see in the Czech corpus Word at a Glance tool when you search for <em>číst</em> (read).
          </p>
          <p class="mb-4">
            It shows you that the most common thing people read is <em>noviny</em> (newspaper) followed by <em>kniha</em> (book). But a textbook will only give you <em>kniha</em>. So, when you practice the word <em>číst</em>, do it in context with both. Note that on the right of the tool, you see some real examples of use. They might give you some more ideas.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Czech prefixes</h4>
          <p class="mb-4">
            Another way to build up your vocabulary is to pay attention to prefixes and suffixes that make up so many Czech words. These suffixes will not be perfectly regular or always make sense but anything you can use to help you build up your vocabulary is fair game.
          </p>
          <p class="mb-4">
            For example, in Czech the suffix for a place where you can get something is <em>-na</em> with a little bit in front of it like <em>-árna</em>, <em>-ovna</em>. <em>Káva</em> (coffee) gives you <em>kavárna</em> (coffee shop) and <em>kniha</em> (book) gives you <em>knihovna</em> (library).
          </p>
          <p class="mb-4">
            Prefixes are even more important for verbs. Similar to English where a lot of verbs are made by adding a little particle or two to them. Go up (in flames), go down (like a storm), go in on (a purchase). You can find a list of these in the Czech Navigator. It’s worth spending some time with them.
          </p>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Czech pronunciation muscle</h3>
          <p class="mb-4">
            Czech pronunciation may not seem like a big deal. But do spend time practicing it and paying attention to the rhythms of the language.
          </p>
          <p class="mb-4">
            For example, some languages like English have irregular stress. Czech doesn't. It’s always on the first syllable. Some languages change the way the vowels sound based on stress. Czech doesn’t. They’re always the same. You’d think this would make it easier. But no. You must practice this a lot if you want to get into the rhythm of the language.
          </p>
          <p class="mb-4">
            These things are more important than the famously difficult bits such as <em>ř</em> and consonant clusters like <em>zmrzls</em>.
          </p>
          <p class="mb-4">
            One place where you can get a sense for the rhythm of spoken Czech is the corpus, where you will find recordings of naturally spoken Czech for many of the words you search for in the <a href="https://www.korpus.cz/slovo-v-kostce/search/cs/%C4%8D%C3%ADst" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">Word at a Glance tool</a>.
          </p>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Czech corpus: Dictionary and grammar in one</h3>
          <p class="mb-4">
            The previous sections spent a lot of time mentioning the Word at a Glance tool. It is based on the Czech national corpus and it can be very helpful to you as a learner.
          </p>
          <p class="mb-4">
            Corpus is a neglected tool for language learners. And here Czech has a leg up on other languages because it has one of the best corpora around (yes, corpora is the plural of corpus). The Czech corpus contains tens of thousands of real texts totalling over 6 billion individual words. There are even texts from recordings of real conversations some of them with audio you can listen to. This will give you a much better picture of how Czechs speak than a dictionary.
          </p>
          <p class="mb-4">
            There are several tools aimed at learners you can use to give you a boost in your learning.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Word at a Glance: Word analysis tool</h4>
          <p class="mb-4">
            <a href="https://www.korpus.cz/slovo-v-kostce/" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">Word at a Glance</a> is a tool aimed at learners that will give you all the collocations along with real examples and frequency info for any word in Czech.
          </p>
          <p class="mb-4">
            This is what it gives for the word <em>school</em>.
          </p>
          <p class="mb-4">
            Wow. This is much better than a dictionary or a thesaurus. You can have hours of fun with this. It is much better than what most textbooks or dictionaries will give you. There are links to real uses in written language and authentic samples of speech recorded in real conversations.
          </p>
          <p class="mb-4">
            And there's another benefit. Remember how all words in Czech change. Any noun can have 14 forms. But not all the forms are the same frequency. And a corpus will also tell you which form is the most common.
          </p>
          <p class="mb-4">
            You should use the Czech corpus Word At a Glance instead of a dictionary. It will tell you everything you need to know about the word including the all important collocations, how it’s used in written and spoken Czech, how common it is, etc. But most importantly it will give you lots of real examples that you plug straight into your practice. Much better than the made up ones you find in a dictionary.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Treq – Dictionary with real translations</h4>
          <p class="mb-4">
            <a href="https://treq.korpus.cz/" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">Treq</a> searches through thousands of parallel texts translated between Czech and English (and other languages too). For any word you search for, it will show you all the ways in which it has actually been translated.
          </p>
          <p class="mb-4">
            Notice that the options Lemma and A=a are ticked to search for all forms of the word <em>kočka</em>.
          </p>
          <p class="mb-4">
            But what’s even better is that when you click on the translation, you will get a list of sentences in which it was found.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Lemma search – when you get stuck</h4>
          <p class="mb-4">
            Another thing the Word at a Glance tool can do for you is find the dictionary form of any word you see. For example, if you look up the word <em>kočce</em> in the dictionary, you won’t find it. And you won’t even be looking all that near the right answer.
          </p>
          <p class="mb-4">
            But if you type it into the Word at a Glance tool, it will find the <em>lemma</em> which is Corpus speak for <em>dictionary form.</em>
          </p>
          <p class="mb-4">
            As you can see, it will also show you that you happened on a very rare form of the word. It does not appear in the top 6.
          </p>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Czech language resources</h3>
          <p class="mb-4">
            These resources are selected for helping you get as much comprehensible input as possible as soon as possible. Many of them will seem too advanced but don’t wait too long to start using them even at the beginning.
          </p>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Reading resources</h3>
          <p class="mb-4">
            Reading is essential for getting enough input to build up vocabulary and a sense of how it is put together in a sentence. Here are some sources of readings for Czech.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Czech Wikipedia</h4>
          <p class="mb-4">
            Czech Wikipedia is a good source of <a href="https://cs.wikipedia.org/wiki/Justin_Trudeau" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">little profiles</a> written in relatively simple language. Look for people you already know.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Czech online news</h4>
          <p class="mb-4">
            Czech online tabloids are great for reading material. They use relatively simple sentences and they will give you a good start in getting to know what goes on in the Czech Republic. Start with <a href="https://www.novinky.cz/" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">novinky.cz</a> which is a more genetic news site. But for celebrity gossip, there’s <a href="https://www.blesk.cz" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">blesk.cz</a>. If you’re interested in sports, <a href="https://www.sport.cz/" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">sport.cz</a> is the place to go.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Czech Readers</h4>
          <p class="mb-4">
            But there are now more and more adapted texts from Czech literature you can look at for sources of reading in Czech. <a href="https://www.czechstepbystep.cz/ucebnice" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">Some</a> you can <a href="https://akropolis.info/kniha/ceska-citanka-adaptovane-texty-a-cviceni-ke-studiu-cestiny-jako-ciziho-jazyka-anglicka-priloha/" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">buy</a> in <a href="http://www.adaptovanacetba.cz/about/" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">online bookstores</a>, but some are even <a href="http://www.pavlamachackova.cz/#adapt_h" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">available online for free</a>.
          </p>
          <p class="mb-4">
            There is also the <a href="https://www.casopis-ahoj.cz/en/" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">AHOJ magazine</a> which is designed specifically for Czech learners working with teachers.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Comic books</h4>
          <p class="mb-4">
            Czech comic books are not as plentiful as in the English speaking world but they do exist. Here are some <a href="http://www.komiks.cz/serial.php" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">free ones</a> but you should look for more.
          </p>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Listening and watching</h3>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Czech YouTube</h4>
          <p class="mb-4">
            YouTube is a source of a lot of Czech. There are many Czech Youtubers – here’s a <a href="https://cs.wikipedia.org/wiki/Kategorie:%C4%8Ce%C5%A1t%C3%AD_youtube%C5%99i" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">list of Czech Youtubers</a> and some of them may be interesting.
          </p>
          <p class="mb-4">
            Vloggers are great. <a href="https://www.youtube.com/watch?v=PGaXAMgz8_o" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">Here’s a great vlog where even beginners get something</a> and it has a real message. At the very least you’ll see a lot of ways of saying hello. Don’t try to understand everything but see if you can get something. Let’s play can also be great because you see what’s happening. Here’s <a href="https://www.youtube.com/watch?v=m37uVnIClfo" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">an example</a>.
          </p>
          <p class="mb-4">
            But YouTube also contains many Czech movies and TV shows, as well as some great Czech music.
          </p>
          <p class="mb-4">
            One source of learning could be children’s shows you may know dubbed into Czech. For examples, this episode of <a href="https://www.youtube.com/watch?v=8rCnWgAjfPA" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">Peppa Pig</a> in Czech is great for greetings.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Czech Radio</h4>
          <p class="mb-4">
            Czech Radio has a great <a href="https://radiozurnal.rozhlas.cz/hlavni-zpravy-rozhovory-a-komentare-5997846" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">daily 20-minute podcast</a> but you only need to listen to the first 20 seconds to get some useful practice.
          </p>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Czech digital tools</h3>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Czech keyboard – learning to type</h4>
          <p class="mb-4">
            You must learn to type in Czech. Install the Czech layout on your computer. By default, the Czech keyboard swaps the Y and Z, so make sure you choose the QWERTY option.
          </p>
          <p class="mb-4">
            The special characters are along the top row and numbers are typed with a shift. The special characters are typed while holding down the right ALT key.
          </p>
          <p class="mb-4">
            But before you learn the positions you can type the Czech accented characters by using the pivot characters.
          </p>
          <p class="mb-4">
            For <em>čárka</em>, type the = sign first and then the vowel. For <em>háček</em> and <em>kroužek</em> type the + sign first (meaning shift and =) and then the letter you want to change.
          </p>
          <p class="mb-4">
            If you’re ever stuck on the web needing to type in some Czech, go to <a href="https://czech.typeit.org" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">https://czech.typeit.org</a> which will give you a way to enter the accented characters.
          </p>
          <p class="mb-4">
            The best keyboard for the phone when using multiple languages is Swift Key but the default keyboard on any smartphone will be enough.
          </p>

          <h4 class="font-bold mt-4 mb-2 text-emerald-800">Useful websites for different purposes</h4>
          <p class="mb-4">
            There are many websites that you can learn from just by using them to find information. These are all aimed at Czechs finding out useful information.
          </p>

          <h5 class="font-bold mt-2 mb-1 text-slate-700">Mapy.cz and IDOS.cz</h5>
          <p class="mb-4">
            These two sites are great for learning about Czech geography. Mapy.cz is the Czech Google Maps and IDOS contains all the public transport timetables. Spend some time looking at them and searching for connections between places. They will expose you to a lot of place names and give you a good sense of what the country looks like.
          </p>

          <h5 class="font-bold mt-2 mb-1 text-slate-700">Chaty a chalupy</h5>
          <p class="mb-4">
            <a href="http://www.chatyachalupy.cz/" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">Chatyachalupy.cz</a> is the Czech Airbnb for countryside breaks. This is an essential part of Czech culture and by searching through it, you will find a lot of useful vocabulary related to accommodation. There are many other similar sites to choose form, as well.
          </p>

          <h5 class="font-bold mt-2 mb-1 text-slate-700">Jobs.cz</h5>
          <p class="mb-4">
            As the name suggests, this is a jobs search site and its use should be obvious. It will give you a lot of vocabulary related to work.
          </p>

          <h5 class="font-bold mt-2 mb-1 text-slate-700">Alza.cz</h5>
          <p class="mb-4">
            Alza is the Czech Amazon (or one of several). It’s a great place to get a sense of what people shop for.
          </p>

          <h5 class="font-bold mt-2 mb-1 text-slate-700">Seznam.cz</h5>
          <p class="mb-4">
            Seznam is the Czech Google and it should be your search engine of choice for all Czech related things.
          </p>

          <h5 class="font-bold mt-2 mb-1 text-slate-700">Rohlik.cz</h5>
          <p class="mb-4">
            Rohlik is a service that delivers groceries. You should spend some time there to see what Czechs eat and what words they use about it.
          </p>
        `
      },
      {
        id: 'appendix-4',
        title: 'Appendix 2: Further Reading',
        type: SectionType.APPENDIX,
        content: `
          <h2 class="text-2xl font-bold mb-4 text-slate-700">Appendix 3: What to read to find out more</h2>
          <p class="mb-4">
            There are four books you can read to find out more about deliberate practice. It will help you think harder about how you can improve your learning. The good news is that they’re all fun. Not dry science, they are written to be read by many people. They are enjoyable, full of stories, good ideas and they describe the science of deliberate practice in a way that anyone can benefit from.
          </p>
          
          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Peak: How to Master Almost Anything by Anders Ericsson</h3>
          <p class="mb-4">
            Ericsson’s early research led to the development of deliberate practice. In this book he summarises all the research results through stories and useful tips. It will give you examples of how deliberate practice was used to master memorising large numbers, play music, chess, etc. There are even a few examples of language learning.
          </p>
          <p class="mb-4">
            It is very easy to read but you can also get a quick summary from this <a href="https://www.youtube.com/watch?v=uoUHlZP094Q" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">YouTube video</a>.
          </p>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">The First 20 Hours: How to Learn Anything Fast by Josh Kaufmann</h3>
          <p class="mb-4">
            This book answers the question of how long it takes to develop sufficient mental representations through deliberate practice. It is 20 hours. It summarises deliberate practice and gives useful case studies about how Kaufmann learned different useful things like basic programming or the ukulele in 20 hours. The 20 hours is not based on research, just practical experience. Even if it’s just an approximate figure, it is a useful goal to aim at.
          </p>
          <p class="mb-4">
            You can hear Josh Kaufmann talk about it during his <a href="https://www.youtube.com/watch?v=5MgBikgcWnY" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">TED Talk</a> where he also demos how he used it to learn the Ukulele. But there’s also a <a href="https://www.youtube.com/watch?v=dK2quHgLI_0" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">7-minute summary</a> of the book itself.
          </p>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Moonwalking with Einstein: The Art and Science of Remembering Everything by Joshua Foer</h3>
          <p class="mb-4">
            Unlike the other two books, this is not a systematic summary of deliberate practice. But it describes how the author used it to become a US memory champion in a year. It tells a lot of interesting stories along the way and it’s an entertaining read on its own. But one of the main lessons is that you can develop memorization techniques for specific things like numbers or vocabulary through deliberate practice.
          </p>
          <p class="mb-4">
            Joshua Foer gave a <a href="https://www.youtube.com/watch?v=VX3c8uDLBY8" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">long talk at Google</a> and a <a href="https://www.youtube.com/watch?v=U6PoUg7jXsA" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">shorter TED talk</a> about his experiences.
          </p>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Fluent in Three Months: Tips and Tricks to Help You Learn Any Language by Benny Lewis</h3>
          <p class="mb-4">
            This is a really unfortunate title for a great book. There is so much snake oil that promises fast results without any work in just three months. Lewis is different. He actually defines what he means by fluent. Level B1 on the CEFR. That’s a real stretch goal but achievable with a lot of work. Not impossible. But first the book is full of strategies and techniques that can be used to support deliberate practice. Some of them are referenced here, as well.
          </p>
          <p class="mb-4">
            You can hear Benny Lewis talk about it in his <a href="https://www.youtube.com/watch?v=HZqUeWshwMs" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">TED talk</a>. But more importantly he also tried Czech. He had to abort his experiment after 2 months for personal reasons but he recorded <a href="https://www.youtube.com/watch?v=gJ04Y085alM" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">a video in Czech</a>. Although he’s reading, his pronunciation is really impressive after 2 months and it is clear that he has at least some understanding of what he’s saying. He also wrote a blog post called <a href="https://www.fluentin3months.com/why-czech-isnt-as-hard-to-learn-as-you-think/" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">Why Czech Isn’t as Hard as You Think</a>. Well worth reading.
          </p>

          <h3 class="text-xl font-bold mt-6 mb-3 text-slate-700">Albanian Learner’s Diary by Dominik Lukeš</h3>
          <p class="mb-4">
            The last recommendation is not a book, it’s just an extract from <a href="https://1drv.ms/w/s!An9kQ7E0DfHz32IfFPfkTA7yQ3-r?e=c6PRDO" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">a diary I kept while I was learning Albanian</a>. It does not describe deliberate practice but it shows how even someone who looks like they’re good at language learning can feel really stupid most of the time. It also gives examples of goal setting and progress audits.
          </p>
        `
      }
    ]
  }
];
