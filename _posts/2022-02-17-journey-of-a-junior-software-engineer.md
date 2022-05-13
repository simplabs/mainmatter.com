---
title: 'Journey of a Junior Software-Engineer'
author: "Inês Silva"
github: inesilva
twitter: inesoaresilva
topic: process
bio: 'Junior Software-Engineer'
description: 'Tips from a Junior Software-Engineer'
og:
---
### A junior software engineer journey

My journey at _Simplabs_ started in July of 2021: soon it will be 8 months that I’m here. This post has in mind all the future junior software engineers. I will describe what it has been like and how it is now, and try to give some tips on the way based on the challenges I faced 💪

Before landing here, I did a 4 months internship as a Ruby backend engineer 💎 
I wanted to continue to improve my backend knowledge and discover the frontend world (that I had so little insight into before)

I can stop here for the **#1 tip** - **if you don’t know,** **start as full-stack.** This way, you can get a better picture of both frontend and backend parts of a project and then find what fits you better or just stay in both worlds.

After the internship, I landed at _Simplabs_ for my 1st job 🙌

Here, I immediately started working on a website for an IT security company. The stack was Next.js & Typescript.

As I said before I had very little experience with the frontend world, and apparently with git 😅

My first struggles were git-related problems - I feel this is the thing that developers tend to be overconfident about their expertise on it.

In university, everytime, we started a project using git we would drop it at some point and we would go to the archaic system of copy-pasting code between us 🥲

Time to jump to my **#2 tip - get git rolling**

You will never be alone in a project, so force yourself to learn tools that will make you more efficient to work as a team. Most of my colleagues always use the terminal so I found it easier to get along with it, plus it gives you that hacker look 😎 but there is an interface option [Github Desktop](https://desktop.github.com/). I was documenting all of my git struggles, I will give a glimpse of how my notion notes were looking like in my 2nd week here 😂:

![My note taking with notion](/assets/images/posts/2022-02-17-journey-of-a-junior-software-engineer/my-notion-notes-eg1.png)

![](/assets/images/posts/2022-02-17-journey-of-a-junior-software-engineer/my-notion-notes-eg2.png)

Git merge vs Git rebase were a frequent debate, and according to my notes I found this video enlightening on the [topic](https://www.youtube.com/watch?v=CRlGDDprdOQ&ab_channel=Academind).
Then, when I was finally becoming more confortable with which commands should I use, they tell me - tidy your git history 🧹 - [this post](https://simplabs.com/blog/2021/05/26/keeping-a-clean-git-history/) done by Chris came handy.

As I showed above, I keep a journal where I note down:

-   bugs I came across with and how I resolved them
-   key ideas on topics I researched
-   things I should search more about

I believe the junior phase can be the most overwhelming one - your learning curve is on sky rocket mode 🚀 - with all this new info coming all the time, I find out helpful to write it down as a way to organize the new content in my head.
Also, a lot of errors I was seeing, they would show up again, I could find what I did & apply it again.

Nowadays, I do it less and less, also the pace slowed it down from week logs to month logs 😆 as you can see by my notion pages:

![My pages organization in notion](/assets/images/posts/2022-02-17-journey-of-a-junior-software-engineer/my-notion-pages.png)

Let’s finish this section with the **#3 tip - keep a journal.**

After git problems, the 2nd position in the podium of challenges goes to testing 🏆

I don’t know how it works in other degrees, but I didn’t write a single test for my programs till I enter the professional world.

Since I’m working here, I’ve been using a JS testing framework, _[Jest](https://jestjs.io/)_ and a [*react testing library](https://testing-library.com/docs/react-testing-library/intro/).* Till recently, I wondered ‘My code is done, why I’m putting my time through this?’ - especially when a lot of times I was losing more time in writing tests than actual code 😅 However, a few weeks ago, it came the moment when I thanked for having tests 💡 I’m working in a project since September, so, at this point is getting pretty big.

We are in the process of adding validations in user forms, and the tests are being like a bulletproof jacket 🛡️

Multiple times I thought that my code was working good but then I ran the tests and I was breaking code of other features 🥲 My previous mentor once told me that he prefers to write the tests before his code, it is a way of breaking down the steps of the problem and build a confidence base for his code.

This style of programming is called TDD - test-driven development. In my head, it looked weird - “how can I write a test before having the code?”, but I’m starting to do it now:

```jsx
describe("professional info is", () => {
  describe("INVALID if", () => {
    test("skills has a null value", async () => {
      const [isValid, invalidFields] = await validate(
        {
          currentSalaryRangeId: 2,
          managementExperienceId: 1,
          skills: null,
        },
        schema
      );

      expect(isValid).toBeFalsy();
      expect(invalidFields.length).toBe(1);
      expect(invalidFields[0]).toBe("skills");
    });
	}
}

```

I needed to add a validation for an input, and I started with the code above, after, I would go to my validation function and change it till I make sure I was throwing an invalid response for null values. 
**#4 tip - get your hands-on testing**
It’s still not my cup of tea, I want to invest more in learning about it and it will probably be more enjoyable once I get better at it, I will try to get my colleagues to pair program with me about this.

Speaking of mentors, I’m going to my last tip **#5 tip - get a mentor and jump into pair programming sessions**.
The way this goes depends on the environment of your company, unfortunately, I see a lot of juniors that tell me that they never did pair programming with any colleague or that they get judged by the time they take to accomplish their tasks.

If you land in a new job where nobody is showing availability to help you out - you are in the wrong place. 
Till my first 3 months, I think I was pairing at least once a week sometimes more. 
Right now I'm doing it less which is natural - as you progress the more independent you become.

However, I want to go back to more regular pair programming sessions - not only is it a great way of learning, but it also makes you know better your colleagues thinking flow which makes it easier for reviewing each other's code.

So, how is my week as a junior dev looking now?

-   I keep doing react, it has some tricky concepts that I’m still trying to fully understand, like dealing with the state of components.
-   We have 1 day per week to work in open source/learning. I’m using mine to create a personal website in ember which has been a great way of learning while doing a project that I like.
-   I’m part of the culture team - we discuss topics that aim for a continuous good team environment. I’m organizing the Lunch & Learn event once a month which was born from these meetings.
-   I’m having 🇫🇷 lessons, I’m very happy that Simplabs gives me the opportunity to grow in other fields too.

Et voilá! I hope the Inês from the future will look back at this and see how much she progressed! 
As for my fellow, junior software engineers hope this helps in some way. 
Don’t hesitate if you feel like sharing the challenges & your progress with me. 
Keep learning & being curious!