import React, { Component } from 'react';
import Header from '../headerComponent/header';

class Telur extends Component {
  render() {
    return (
      <div>
      <Header />
      <div className="aboutMe">
          <h1>Telur</h1>
      <div className="myCard">
      <p>Telur is my first full-on Design project. Take a look at the following infographic, or read below for a more in-depth take.
      </p>
      <h6>
      If you'd like to skip ahead, you can jump to: <a href="#what">What is Telur?</a> >> <a href="#why">Why? </a>
       >> <a href="#whytelur">Why Telur?</a> >> <a href="#process">The Process</a> >>
       <a href="#video"> Video Prototype</a> >> <a href="#wire"> Wireframe</a> >>
       <a href="#code"> Coding</a> >> <a href="#user">User Testing </a>
        >><a href="#redesign"> Redesign </a> >>
        <a href="#summ"> Summary(Highlights, Takeaways, Improvements)</a>
      </h6>

    <img className="animated fadeInLeft" src = {require('../../Assets/TelurInfo.png')} width="100%" alt="" />
<br />
<h5 id="what">What is Telur?</h5>
  <p>
A messaging web application that allows you to send scheduled messages on a farm-themed platform. It intends to ease and gamify communication particularly between family members.
I worked in a team with two others to invent and produce Telur.
</p>
<h5 id="why">Why?</h5>
<p>
It all started with a simple thought: <b>“Have you ever had something to tell your parents, but didn’t know how to?”</b>.
Communication is a critical part of any relationship, yet there are many factors which can hinder communication. After chatting more with my teammates and relating our own personal situations together, we were able to boil it down to three main factors we could work on to help boost communication.
<ol>
<b><li>Timing</li></b>
As international students, we often find it hard to find a good time to talk with our families back home in different time zones.
<b><li>Awkwardness</li></b>
Some families haven’t established a comfortable space for family members to share their thoughts and what’s happening in their lives with each other.
<b><li>Lack of Content</li></b>
People want to be closer to their families, but don’t know how or what to talk to them about.
</ol>
</p>
<h5 id="whytelur">Why Telur?</h5>
<p>
We came up with a few ideas as to how to combat these factors and to ultimately enhance familial bonds. For example, besides Telur, another strong contender was an app we called <b>Rekinder</b>, which starts a fire between two people, and prompts them with deep questions and scenarios such that when these prompts are answered by the two persons then the fire grows stronger/bigger and likewise, if the conversation starts dying between them so does the fire. This was heavily trying to target the “Lack of Content” factor and aimed at facilitating deep conversations.

In order to <b>narrow down our scope</b>, we created <b>storyboards</b> for the general direction we were going (trying to enhance family communication) and and paper prototypes for both of the applications we thought of (Telur and Rekinder).
</p>
<h6>3 Storyboards</h6>
<img src = {require('../../Assets/Storyboard1.png')} width="100%" alt="" />
<img src = {require('../../Assets/Storyboard2.png')} width="100%"  alt="" />
<img src = {require('../../Assets/Storyboard3.png')} width="100%" alt="" />
<br />
<h6>2 Paper Prototypes - Telur & Rekinder</h6>
<img src = {require('../../Assets/telurpaper.png')} width="100%" alt="" />
<br />
<img src = {require('../../Assets/rekinderpaper.png')} width="100%" alt="" />
<br />
<p>
Using these paper prototypes, we were able to conduct <b>heuristic evaluations</b> on both app ideas, done by our peers and fellow students in our school. During this time, we observed the user and followed their mental flow through our app and were able to spot a lot of areas that were lacking and could use improvement, and areas that we’d never thought about venturing into. There was a lot more feedback and receptive enthusiasm when users toyed with Telur compared to Rekinder, and so, we decided to move forward focusing on Telur!
</p>

<h5 id="process">The Process</h5>
<h5 id="video">Video Prototype</h5>
<p>
With this newfound focus, we made a <b>video prototype</b> to demonstrate in a more realistic environment how we envision our app being used. I was responsible for acting and editing the video and contributed to the planning and storyboarding, which in the end was largely based on the earlier storyboards we did.
You can view <a href="https://youtu.be/89vT891ubVA">the video on Youtube here</a>.
<br />
<br />
</p>
<h5 id="wire">Wireframe</h5>
<p>
We followed this with <b>wireframing</b> of two key components of our application. I used <b>Sketch</b> to create the wireframes, and started with many options before finalizing with my team. The process I took with this was to first outline all the important details, actions and items that we wanted to have on each page/component. Then, I drew a rough sketch on paper of multiple different ways to lay these items out. Finally, I narrowed it down to a few and wireframed those on Sketch (which I learned on the fly, this was my first time using it). Having these more solid layouts, I showed them to my teammates and we went over changes that we could make, integrating the parts we liked from each different design to come together into one that we were all satisfied with.
</p>
<br />
<h6>Wireframes - Home Page & Lay Page</h6>
<img src = {require('../../Assets/telurwire.png')} width="100%" alt="" />
<img src = {require('../../Assets/lay1.png')} width="100%" alt="" />
<img src = {require('../../Assets/lay2.png')} width="100%" alt="" />
<br />
<br />
<h5 id="code">Coding</h5>
<p>
Based on our wireframes, we were able to code up these two screens. We worked collaboratively through <b>GitHub</b> and deployed our website on Heroku and rerouted to a domain we purchased. The libraries we used to build the web app were <b>React and Semantic UI</b>. It was my first time also touching on these libraries so it was a good experience to learn all of these new things. I also used <b>Adobe Illustrator</b> to create the hatching eggs/chickens for the “Hatch” page.
<br /> <br/></p>
<h5 id="user">User Testing</h5>
<p>
We continued to code up our web application until finally it was ready for <b>testing</b>! We developed a testing protocol, so that we could be standardized in our testing. We recruited peers and students from our school to be our testers. During the test, the users were expected to complete two tasks: “Sending a Message” and “Opening a Message”, which we deemed as key features and interactions of our application. The approach we took was to be distant, and to assume a more of a prompting role, than to be heavily involved in the test. We wanted the user to feel free and true in all their actions, and we wanted to hear their thoughts purely without any outside influence. We asked them to voice aloud their actions and thoughts, and what they expected to happen at each step they took. After observing the users go through the tasks, and taking notes along the way of their mental model and expectations, we had a short post-use questionnaire, which we delivered verbally. We asked 7 questions, targeted at finding the weak and strong spots of our application and mismatches in mental models that we had when designing the application.
<br /> <br />
<ol>
<li>How easy or difficult was it to send and read a message, compare to sending an email for example? (1 to 5, 1: very easy, 5: very difficult, send and read have its own rating)
</li>
<li>What are your thoughts on the farm theme of the app and how easy or difficult is it to understand?
</li>
<li>Which parts of the application or what tasks did you struggle with the most?
</li>
<li>What suggestions do you have to improve the application/user experience of Telur?
</li>
<li>Were there any major confusions/parts that did not meet your expectations? (e.g. missing buttons/actions, missing pages, etc.)
</li>
<li>What other functionalities would you want to add to Telur?
</li>
<li>Any other comments?
</li>
</ol></p><br />
<h5 id="redesign">Redesign</h5>
<p>
The results that we received from the user testing, we were able to find out that <b>our general navigation, and the “Lay” page that we had were not very intuitive</b> and that there was a lot of room for guesswork on the participant’s part. We realized we did not provide much help or guidance to new users and that it may be a lot of mental workload to expect them to understand everything and be able to navigate the app smoothly without this support. For example, the farm theme may need some getting used to at first, so it may not be intuitive that “Lay” is equivalent to “Send” or that “Hatch” is equivalent to “Open”. We also had a very confusing “Lay” page, because we split it up into a two-step process, where you write your message first, and we had two tab bars, with which you could move on to the second step of choosing the options such as Recipient and Scheduled Delay before finishing it off and sending it. Many users did not know what to expect upon pressing “Next” or “Send” or did not even know which one they should press to move on.
<br />
<br />
Therefore, seeing as how this was a key interaction in our application but that it had some pretty critical flaws, we decided to redesign this page of our application. We consolidated the messaging process into a one-page process, such that all the necessary details could be completed and filled up in one page. There would be much less guesswork on the part of the user and resembles more of an email-like structure which people are familiar and comfortable with. We also added a confirmation page before sending the message so that we can make sure that the user is completely aware and informed of what they’re about to do.
<br />
<br /></p>
<h6>Redesign of Lay Page</h6>
<h6>Original Lay Page</h6>
<img src = {require('../../Assets/lay1real.png')} width="50%" alt="" />
<h6>Redesigned Lay Page</h6>
<img src = {require('../../Assets/lay2real.png')} width="50%" alt="" />
<br />
<p>However, seeing as how our first design did not work as well as we expected, the best way to make sure that this redesign was actually fixing things and improving the user experience, is of course to test on users again! So we did some comparative testing, where we allowed users to use both version of the Lay page, and similar to our previous user testing, we asked them to voice their thoughts aloud during the test. We also observed their actions, and asked them which they found easier to use and other thoughts.
<br /><br />

In the end, the new design was comparatively easier to use! We created a walkthrough video with the new page implemented. You can view the <a href="https://youtu.be/zapk1atJvTk">walkthrough video on Youtube here</a>. As this was my first hands-on design project, it was definitely a great experience! I’d like to summarize a few key highlights and takeaways in terms of things I enjoyed doing, and things I learnt. Also, I’d like to include some potential future improvements and changes that we were thinking of doing if we could continue working on Telur.
</p>
<h4 id="summ"> Summary </h4>
<p>
<b>Highlights</b>:
<ul>
<li>Working on something that I truly cared about and that I felt was applicable to myself and the people around me.
</li>
<li>Learning about people’s typically unobserved natural habits. </li>
<li>Being able to a variety of things - videomaking, storyboarding, prototyping, coding, observing and testing.
</li>
<li>Gaining experience with professional software in a short amount of time (Illustrator, Sketch).
</li><li>High amount of interaction with people (teammates, audience feedback, peers and testers, mentors).</li></ul>
<b>Key Takeaways</b>:
<ul>
<li>Important not to lose track of why you’re creating in the first place. </li>
<li>Important to stay motivated and on track. </li>
<li>Important to continuously seek improvements and not feel complacent. </li>
<li>Important to see how your creation fares in the real world.</li>
</ul>
<b>Potential Changes</b>:
<ul><li>Adding a Reply feature after Hatching An Egg, as it would facilitate conversation and not leave the user at a dead end after reading a message. </li>
<li>Adding a “Lay” and/or “Hatch” button right under the main egg icon/graphic on the homepage, as these are our key features we can highlight, and this more resembles the original paper prototype we had in mind.
</li>
<li>Adding a short tutorial for first-time users to help them adjust and get used to the application flow.
</li>
<li>Adding in animations and better graphics to make the experience more enjoyable.</li>
</ul>
All in all, I thoroughly enjoyed the entire process of creating this application with my friends. And it makes me excited to keep doing these kinds of things and envisioning an enhanced future!
</p>
    </div>
    </div>
</div>

    );
  }
}

export default Telur;
