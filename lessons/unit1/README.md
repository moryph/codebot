# Unit 1
> Introduction to JavaScript

### Lesson Plan
1. Lesson overview
2. Environment setup and exercise overview
3. Programming overview
4. Basic JavaScript syntax
5. Variables and primitive types
6. Operators and type coercion
7. Arrays and objects
8. If, For, While
9. Functions
10. Group project overview

### Useful References

[Mozilla web documentation](https://developer.mozilla.org/en-US/) - Very useful reference for any functions on 
JavaScript built-ins. Oriented towards browser based JavaScript, however Node supports anything that Chrome 
supports.

[Node API documentation](https://nodejs.org/dist/latest-v13.x/docs/api/) - Reference for Node specific APIs. We're
not going to be using any Node specific things for a while, but this is good to keep in mind, especially if you
go over some of the non-exercise code in the repository.

[ECMAScript specification](https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf) - The latest
JavaScript specification (they changed the name from JavaScript to ECMAScript to avoid confusions with the name). While
I maintain that learning a language from a specification is a horrible waste of time and akin to learning English from
reading the English dictionary (aka practically completely useless), it may help to have a document that details
precisely how interactions within the language are meant to work. For the record, I've never fully read this document,
and I don't see any reason to read it.

### Additional Notes

I intend to reserve some space on each unit to give some relevant but not important information about the
topics covered. These additional notes are not required reading for learning JavaScript, but on the other hand
are good for a well-rounded approach to learning. Feel free to read them at your leisure, if at all.

Today, since the topic is mainly JavaScript as a language, I thought I would talk about JavaScript history.

The need for a browser based programming language (and no, HTML is not a programming language) grew as more and 
more people adopted the internet. There's always limitations to what can be done purely on the server side, especially
when it comes to interactivity. To this end, a programmer named Brendan Eich (who would later become CEO of the Mozilla Corporation)
was tasked with embedding some sort of programming language into Netscape Navigator, which back then controlled about 75%
of the browser market. He did so in 10 days, in what was probably a very busy two weeks in May 1995. 

The resulting language was originally called Mocha, then LiveScript, before finally being renamed to JavaScript, which
has ever since caused confusion with Java (which some have said was deliberate, and gave JavaScript a foothold as the hot
new web language).

JavaScript would be later adopted by Microsoft (aka reverse engineered) and released under the name JScript as part of Internet Explorer 3.
Similar but noticeably different from JavaScript, this would cause difficulties for web programmers at the time, causing
them to end up making webpages that were best viewed only in one of the two browsers, and igniting a war between
Microsoft and Netscape for control of the browser market. JavaScript became known as a roadblock for interoperability in the web,
after all, unlike HTML and later CSS, JavaScript was browser specific.

It was in November of 1996 when Netscape would submit JavaScript to ECMA for standardization. From this came ECMAScript,
which would supplant JavaScript as the web scripting language (technically, when we say "JavaScript" we're really referring
to "ECMAScript"). Microsoft would at first oppose the standardization, preferring to stay with JScript, but as more
and more people started to develop with JavaScript, including AJAX, and libraries such as JQuery, they would eventually
agree to standardize on JavaScript in 2009, on a version called ECMAScript 5. 

ECMAScript 5.1 would be released in 2011, which caught JavaScript up with the standard at the time. This is the most
implemented JavaScript version even today, and you can reliably program in it and have any browser be able to run it.

The next release would be in 2015, with the release of ECMAScript 2015, followed by a similar release every year. 
We're going to be using mainly features of ECMAScript 2017, with some later ones brought in. There won't be support
for these things in current browsers, but there exist tools that convert code between versions (a process known as transpiling).

Node.js, the runtime that we're using for these lessons, was created in 2009 as an open-source project (and is perhaps a good
lesson into the not-so-good aspects of using open source to manage large projects). I'll be going over Node things in later lessons,
just good to know for now that it's built on v8, an open-source JavaScript engine that powers Google Chrome and Chromium, and
is the most widespread server-side JavaScript engine in use today.

On a closing remark, JavaScript was often seen as a language for "amateurs" given its beginnings, and that perception
has not completely faded today. Due to its short development time, the language contains a lot of what people would
often perceive as terrible language design decisions. These two facts have caused a substantial amount of criticism to 
outright hatred for JavaScript. However, if programmers are to avoid the terrible parts of the language, there remains
a powerful language that is, due to the popularity of the internet, one of the most used languages today.
