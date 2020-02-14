# Unit 2
> Additional Programming Constructs and Concepts

### Lesson Plan
1. Recursion
2. Closures
3. Classes
4. Data Structures
5. Algorithms

### Additional Notes

The contents of this lesson are spread roughly throughout 1.5 courses in a typical undergraduate CS degree. Due to that,
this lesson is mainly focused on the practical and fairly introductory aspects of the topics presented. I'm going
to use this section to briefly focus on some less practical and more academic parts of the topics (though still far
from the depth that they would be taught in CS courses).

#### Recursion

The most common place recursion is used as a technique in programming is to break down a problem into subproblems,
and, in solving the subproblems, compose them together in a way that solves the big problem (for those of us who have
formally taken CS courses, this is the opposite of dynamic programming, which involves composing small solutions together
until it can solve a problem of the desired size). In many places, a function calls itself only once recursively, but
there is no reason this has to be the case, in some algorithms, the function calls itself multiple times (a famous one is merge sort).

Of particular note in recursion is the base case, a terminating case. Without this, recursion will go infinitely, though
on usual systems and languages it will result in a stackoverflow error. This is similar to an infinite loop, with the base
case representing the terminating condition of the loop. There are ways to prove recursion both in terms of 
correctness (it does what it's supposed to do) and safety (it never results in infinite recursion); a common process
used is proof by induction. These proofs are too advanced and theoretical for these lessons, but it's worth noting
that it is definitely possible to look at recursive code and prove that it is correct.

The final thing to note is that all recursive algorithms can be written iteratively, and vice-versa. This is a consequence
of the Turing completeness of general recursive functions and a non-recursive calculus. (Essentially, a system
that only uses recursion can do everything that a system that only uses iteration can, both of which
can do anything a computer can do in general). However, this is only on a theoretical level, it says
nothing about how fast or how much memory the equivalent would take (in fact it is typically assumed to be infinite
memory and finite but not specified time), so for practical purposes it is better to use recursion/iteration
as needed instead of trying to only use one system. Not to mention it is usually more readable to use the more intuitive
system.

#### Closures

A deeper discussion of closures first requires a discussion of the concept of scope, as well as what variables actually are.

A variable is something that contains a value. Therefore, it must represent a region in memory, and changing the value of the variable
updates the region of memory where that variable represents. To work with a variable in code, the programmer declares it, which
associates with the variable a name (a process known as name binding). From the declaration, the programmer can use
the name of the variable to use or update the value stored at the variable's region in memory.

However, the name cannot always be used this way. If the programmer declares the variable within a function,
using the name of the variable outside the function fails. The same name can also be used outside the function
to refer to something else as well. The place where a particular name works to identify a particular variable
is known as the scope of the name binding (though informally we typically just refer to the name binding
by the term variable). Variables declared using `let` or `const` in JavaScript have block level scope,
this means that they are only effective within the block, or closest curly braces, enclosing their declaration.

This system works pretty well, providing a certain degree of isolation for names. A programmer doesn't have to worry
about name conflicts with variables in another file, or even within another block of the same file. But while a name binding
cannot be used outside the block it's declared in, it certainly can be used within inner blocks. What if the inner block
is a function? What if the function itself uses the name binding, which was declared outside of itself?

There are two, equally valid, ways of answering the two questions. They are given (somewhat incorrectly, but this is
established terminology at this point) the terms "lexical scope" and "dynamic scope". Lexical scope
is a system where the variable the name binding refers to at the time of declaring the function is the variable
referred to at all times by the function. Dynamic scope is a system where the name binding refers to whatever that
name binding would refer to when the code is executed by the function, typically when the function is invoked.

See the code samples below for an example:

```JavaScript
function testFunc() {
  let a = 0
  return function() {
    console.log(a)
    a++
  }
}

let a = 5
const newFunc = testFunc()
newFunc()
newFunc()
newFunc()
```

What variable does the name `a` refer to in the returned function `newFunc`? In lexical scope, it would
refer to the `a` within testFunc, and therefore will print out:
```bash
0
1
2
```

In a dynamically scoped language, it would refer to the later `a` variable, and therefore print out:
```bash
5
6
7
```

In many ways, lexical scope is a lot easier to understand through reading the code, the variables are always
the same regardless of where the function is called. It is for this reason that lexical scope is used in vastly more
languages, including JavaScript.

But then arises a problem. Those variables are not stored with the function itself, since they are declared outside
buthe function block. However, they must be accessible within the function. To this end, `newFunc` is not
technically just a function, but rather the function and all of the variables that it accesses but does not
declare (we call these variables the "environment"). This combination of function and environment is what a closure
ultimately is, and we call the variables brought in by the environment "captured" by the closure.

It's interesting to note that only variables used within the function are put into the closure, not all variables
declared outside the block but within scope. Normally this is completely transparent, the engine is very good
at determining what variables are used. However, it may cause problems while debugging.

We go over quite a few use-cases for closures in the lesson itself. Aside from that, it's useful to note
that closures are foundational constructs within functional programming languages, those that more 
extensively use Church's Lambda Calculus model of computation. We're not going to discuss functional programming
too deeply, but some aspects of it have gone into JavaScript, and those are worth at least a mention.

#### Classes

Since most of relevant discussion about Classes was done in the lesson, I'm going to go more in depth
into the implementation of Classes within JavaScript. The keyword `class` came out in 2015, so by the time
classes were formally defined in JavaScript, the language was already fairly mature. Before then, if people
wanted to define things as classes, they would have had to use functions (which, like all non-primitive types
in JavaScript, are technically of type Object and can have properties). This function would act as a constructor,
calling it with the `new` keyword would return an instance of itself with the appropriate fields set. In many ways,
the `class` keyword is just a syntax change of this process, to bring it more in-line with the syntax of other languages.

However, there is one significant difference between the JavaScript function-based class and classes of other languages:
inheritance. By default, JavaScript uses a system of inheritance called "Prototype Inheritance". This means that
all non-primitive types in JavaScript contain a special property called `prototype`, the fields of which
are available on all descendants. These fields are commonly functions, and represent the inheritable methods. Methods
that are not placed on the prototype are not inherited. This is in contrast to standard class inheritance, where
all methods are inherited. The `class` keyword essentially puts all of the methods on the prototype, duplicating
this behaviour.

One final note about prototypes and classes. Since prototypes are available to all descendants, and it is essentially
just a special property, it is possible to modify the prototype of something that has a lot of descendants, such as Object,
and have it affect a ton of other things, everywhere. For this reason, modification of the prototypes of built-ins is 
essentially prohibited in JavaScript, and often exposed as a vulnerability. In addition, malicious code can actually
do this in order to get access to data that they aren't supposed to. In fact, since the constructor is just a function,
it is possible to globally override constructors so that, for example, creating an Array will, instead of actually
creating an array, do whatever you want with the elements of the array instead. These vulnerabilities arise
as a result of classes being not first-class types in JavaScript, but rather seemingly hacked together from existing
first-class types. Modern JavaScript avoids these kinds of vulnerabilities, but it's useful to keep in mind in case
you want to use older JavaScript libraries or styles.

#### Data Structures

I took a data structures related course, and we learned many data structures, as well as evaluating
how fast those data structures took in order to perform certain operations. After graduation, I found
myself using hash tables almost exclusively, with a linked list or array here and there. While these might
be the routine, day-to-day data structures, certain code can be significantly improved by using the right
data structure, so it's good knowledge to have (and many software companies definitely test for these things).

I'm going to talk about a few more advanced data structures here. They're useful to know, but they're definitely
not in the realm of basic data structures that I wanted to cover in the lesson itself.

**Adjacency List**

Adjacency Lists are commonly used to implement a data type known as a graph. Graphs are very powerful relatively
high level data types that are used to model relationships. A graph is essentially a tree with no
hierarchy nor restrictions on who can connect to what. Graphs are of primary importance to a lot of theoretical
computer science and mathematics, to the point where there is a whole field of mathematics dedicated to
it known as "Graph Theory". Creatively using graphs is a fairly useful skill to have, and I hope to at least
use them as we proceed in later lessons. A very classic use of a graph is to model areas, such as cities, and
roads between them, to solve things such as the travelling salesman problem.

**Heap**

A heap is a special tree that satisfies the "Heap Property". The Heap Property states that for every
parent and child relationship, the parent must be larger than or equal to the child (for a max-heap) or smaller than or equal
to the child (for a min-heap). There is no restriction on siblings. Due to this, the root of the tree
is guaranteed to be either the largest, for a max-heap, or the smallest, for a min-heap. By repeatedly
removing the root of the element, and figuring out the new root, a data type known as a priority queue can be
efficiently implemented, a priority queue is much like a queue, but the elements are extracted in order of their
priority values instead of in a strictly FIFO order. Heaps are more efficiently than a sorted tree, and find
use in a sorting algorithm, which essentially converts the input into a heap and then repeatedly extracts
the root element until the heap is empty.

**Disjoint Set**

As the final data structure to explore here in notes, we're going to choose a highly specialized one.
A disjoint set keeps track of a group of elements that belong to disjoint sets, that is, sets that have no overlap
of elements. This data structure is pretty much exclusively used to implement Kruskal's Algorithm, a way
to determine the minimum spanning tree of a Graph (the smallest tree that contains all of the nodes on a graph).

#### Algorithms

In this section, I'm going to briefly talk about Algorithms and how they relate to Turing Machines. This is going to get into
Theoretical Computer Science, but, as a very brief introduction, it should be fairly understandable.



