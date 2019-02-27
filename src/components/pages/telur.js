import React, { Component } from 'react';
import Header from '../headerComponent/header';
import Carousel from '../carouselComponent/carousel';

class Telur extends Component {
  render() {
    var picOne = <img src = {require('../../Assets/Storyboard1.png')} width="100%" alt="" />
    var picTwo = <img src = {require('../../Assets/Storyboard2.png')} width="100%" alt="" />
    var picThree = <img src = {require('../../Assets/Storyboard3.png')} width="100%" alt="" />


    return (
      <div>
      <Header />
      <div className="aboutMe">
          <h1>T E L U R</h1>
      <div className="myCard">
      <img src= {require('../../Assets/telur-revised/telur-screens2.png')} width='90%' />
<br />
      <h6><div className="role">ROLE:</div> Product Designer, UX Designer, UX Researcher</h6>
      <h6><div className="role">Point of View:</div> Families can and should be brought emotionally closer by technology regardless of physical proximity.</h6>
<br />
<h4 id="what">What is Telur?</h4>
  <p>
A messaging web application that allows you to send scheduled messages on a farm-themed platform. It intends to ease and gamify communication particularly between family members.
I worked in a team with two others to invent and produce Telur.
</p>
<br />
<h4 id="why">The Problem</h4>
<p>
It all started with a simple thought: <b>“Have you ever had something to tell your parents, but didn’t know how to?”</b>.
Communication is a critical part of any relationship, yet there are many factors which can hinder communication. After relating our own personal situations together, we were able to boil it down to three main factors we could work on to help boost communication.
</p>
<div className="container">
  <div className="row">
    <div className="col-sm">
      <img src={require('../../Assets/telur-revised/clock.png')} height='45%'/>
      <h6><b>Timing</b></h6>
      As international students, we often find it hard to find a good time to talk with our families back home in different time zones.
  </div>
    <div className="col-sm">
    <img src={require('../../Assets/telur-revised/awk.png')} height='45%'/>
    <h6><b>Awkwardness</b></h6>
    Some families haven’t established a comfortable space for family members to share their thoughts and what’s happening in their lives with each other.
    </div>
    <div className="col-sm">
    <img src={require('../../Assets/telur-revised/content.png')} height='45%'/>
    <h6><b>Lack of Content</b></h6>
    People want to be closer to their families, but don’t know how or what to talk to them about.
    </div>
  </div>
</div>
<h4 id="whytelur">The Process</h4>
<h5>Storyboarding</h5>
<p>We created 3 storyboards (presented in an image carousel below) to unite our general direction and to exemplify situations in which we imagined a user might use our application.
</p>
<Carousel picFromParent1 = {picOne} picFromParent2={picTwo} picFromParent3 = {picThree} />

<br />
<h5>Exploring Divergent Solutions & Paper Prototyping</h5>
<p>
We came up with a few ideas as to how to combat the identified problematic factors and to ultimately enhance familial bonds. One of these was an application we called 'Rekinder', which targeted the 'Lack of Content' issue. To test out both ideas, we made low-fidelity paper prototypes.
<br />< br/>
Using these paper prototypes, we were able to conduct <b>heuristic evaluations</b> on both app ideas, done by our peers and fellow students in our school. There was a lot more feedback and receptive enthusiasm when users toyed with Telur compared to Rekinder, and so, we decided to move forward focusing on Telur!
</p>

<h6>2 Paper Prototypes - Telur & Rekinder</h6>
<div className="container">
<div className="row">
<div className="col">
<img src = {require('../../Assets/telurpaper.png')} width="100%" alt="" />
</div>
<div className="col">
<img src = {require('../../Assets/rekinderpaper.png')} width="100%" alt="" />
</div>
</div>
</div>
<br />

<h5 id="video">Video Prototyping</h5>
<p>
With this newfound focus, we made a <b>video prototype</b> to demonstrate in a more realistic environment how we envision our app being used. I was responsible for acting and editing the video and contributed to the planning and storyboarding, which in the end was largely based on the earlier storyboards we did.
You can view <a href="https://youtu.be/89vT891ubVA">the video on Youtube here</a>.
<br />
</p>
<h5 id="wire">Wireframing</h5>
<p>
I used <b>Sketch</b> to create the wireframes, and started with many options before finalizing with my team. The process I took with this was to first outline all the important details, actions and items that we wanted to have on each page/component. Then, I drew a rough sketch on paper of multiple different ways to lay these items out. Having these more solid layouts, I showed them to my teammates and we went over changes that we could make, integrating the parts we liked from each different design to come together into one that we were all satisfied with.
</p>
<br />
<h6>Wireframes - Home Page & Lay Page</h6>
<div className="container">
<div className="row">
<div className="col">
<img src = {require('../../Assets/telur-revised/home-mobile-1.jpg')} width="100%" alt="" />
<p className="caption">Home Page Ver 1</p>
</div>
<div className="col">
<img src = {require('../../Assets/telur-revised/lay-mobile-1.jpg')} width="100%" alt="" />
<p className="caption">Lay Page Ver 1</p>
</div>
<div className="col">
<img src = {require('../../Assets/telur-revised/home-mobile-2.jpg')} width="100%" alt="" />
<p className="caption">Home Page Ver 2</p>
</div>
<div className="col">
<img src = {require('../../Assets/telur-revised/lay-mobile-2.jpg')} width="100%" alt="" />
<p className="caption">Lay Page Ver 2</p>
</div>
</div>
</div>
<br />
<h5 id="code">Coding</h5>
<p>
Based on our wireframes, we were able to code up these two screens. We worked collaboratively through <b>GitHub</b> and deployed our website on Heroku and rerouted to a domain we purchased. The libraries we used to build the web app were <b>React and Semantic UI</b>. It was my first time also touching on these libraries so it was a good experience to learn all of these new things. I also used <b>Adobe Illustrator</b> to create the hatching eggs/chickens for the “Hatch” page.
<br /></p>
<h5 id="user">User Testing</h5>
<p>
We developed a testing protocol, so that we could be standardized in our testing. We recruited peers and students at random from our school to be our testers. During the test, the users were expected to complete two tasks: <b>“Sending a Message”</b> and <b>“Opening a Message”</b>, which we deemed as key features and interactions of our application. We asked them to voice aloud their actions and thoughts, and what they expected to happen at each step they took, taking notes along the way of their <b>mental model</b> and expectations. After <b>observation</b>, we had a short <b>post-use questionnaire</b>, which we delivered verbally. We asked <b>7 questions</b> (outlined below), targeted at finding the weak and strong spots of our application and mismatches in conceptual and mental models.
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
</ol></p>
<h5 id="redesign">Redesign</h5>
<p>
With results from user testing, we found that <b>our general navigation, and the “Lay” page were not very intuitive</b> and that there was <b>a lot of room for guesswork</b> on the participant’s part. We realized we did not provide much help or guidance to new users and that it may be a lot of mental workload to expect them to understand everything and be able to navigate the app smoothly without this support.
<br /><br />
One major problem was that we had <b>a very confusing “Lay” page</b>, because:
<ol><li>We split it up into a two-step process, where you write your message first.</li>
<li>We had two tab bars - 'Send' and 'Next', with which you could move on to the second step of choosing the options such as Recipient and Scheduled Delay before finishing it off and sending it.</li>
</ol>
Many users did not know what to expect upon pressing “Next” or “Send” or did not even know which one they should press to move on.
<br />
<br />
Therefore, seeing as how this was a key interaction in our application but that it had some pretty critical flaws, we decided to redesign this page of our application. We <b>consolidated the messaging process</b> into a one-page process, such that all the necessary details could be completed and filled up in one page. There would be much less guesswork on the part of the user and resembles more of an email-like structure which people are familiar and comfortable with. We also added a <b>confirmation page</b> before sending the message so that we can make sure that the user is completely aware and informed of what they’re about to do.
<br />
<br /></p>
<h6>Redesign of Lay Page</h6>
<div className="container">
<div className="row">
<div className="col">
<img src = {require('../../Assets/lay1real.png')} width="50%" alt="" />
<p className="caption">Original Lay Page</p>
</div>
<div className="col">
<img src = {require('../../Assets/lay2real.png')} width="50%" alt="" />
<p className="caption">Redesigned Lay Page</p>
</div>
</div>
</div>
<br /><p>
We did <b>comparative testing</b> on new users with the Original and Redesigned Lay page. In the end, the new design was comparatively easier to use! We created a walkthrough video with the new page implemented. You can view the <a href="https://youtu.be/zapk1atJvTk">walkthrough video on Youtube here</a>. As this was my first hands-on design project, it was definitely a great experience! I’d like to summarize a few key highlights and takeaways in terms of things I enjoyed doing, and things I learnt. Also, I’d like to include some potential future improvements and changes that we were thinking of doing if we could continue working on Telur.
</p>
<h4 id="summ"> Summary </h4>
<p>
<b>Highlights</b>:
<ul>
<li>Working on something that I truly cared about and that I felt was applicable to myself and the people around me.
</li>
<li>Learning about people’s typically unobserved natural habits. </li>
<li>Being able to try out a variety of things - videomaking, storyboarding, prototyping, coding, observing and testing.
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
