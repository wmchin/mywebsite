import React, { Component } from 'react';
import Header from '../headerComponent/header';

class DFMint extends Component {
  render() {
    return (
      <div>
      <Header />
      <div className="aboutMe">
          <h1>Redesigning Intuit's Mint Community</h1>
      <div className="myCard">
      <p>For my first Design Sprint, I worked in a team of 7 members to redesign a community platform for Intuit's Mint application users. Take a look at the following infographic and screens, or read below for a more in-depth take.
      </p>
      <h6>
      If you'd like to skip ahead, you can jump to: <a href="#pre">Pre-Sprint</a> >> <a href="#briefs">Challenge Briefs </a>
       >> <a href="#dce">Deep Customer Empathy</a> >> <a href="#gbtgn">Go Broad to Go Narrow</a> >>
       <a href="#rapid"> Rapid Experimenting</a> >>
        <a href="#final"> Final Stretch</a> >>
        <a href="#summ1"> Summary(Highlights, Takeaways, Improvements)</a>
      </h6>

    <img className="animated fadeInLeft" src = {require('../../Assets/MintInfoSS.png')} width="100%" alt="" />
    <img className="animated fadeInLeft" src = {require('../../Assets/MintScreens.png')} width="100%" alt="" />

<br />
<h5 id="pre">Pre-Sprint</h5>
  <p>
  In November 2018, I saw an advertisement for a design sprint, Design Frontiers, hosted by my school’s Design organization, in collaboration with company sponsor Intuit. I decided to put myself out there and get more involved in the Design community around me so I signed myself up! Fast-forward a month or so and there I was walking into a conference room full of people and faces I didn’t know. We kicked off with Intuit’s Lightning Talks, which were refreshing to hear and got me real pumped up about the rest of the day.
<br /><br />
  However, even though the atmosphere was exciting, it was also a little bit intimidating because I felt ever-so-slightly <b>out of place</b>, being quite a newbie. The challenge briefs were released and us participants were let out for a lunch break and to mingle. I floated around and somehow ended up chatting with someone in the conference room, who offered me a seat. We talked and he ended up inviting me to join his team of 6 as they were looking for one more person to join them! Lucky me!
<br /><br />
  Our group had a <b>good mix of expertise levels</b>, with some people being absolute beginners, to those who’d dabbled in Design a bit (like me), and Design senpais who’d be graduating with their HCI degrees soon. It was really good to know that there’d be different types of perspectives and that I would have a great opportunity to learn from more experienced seniors.
</p>
<h5 id="briefs">Challenge Briefs</h5>
<p>
There were 2 challenge briefs - <b>creating a Mint community vs. redesigning TurboTax Live’s onboarding experience</b>, where Mint is Intuit’s web-based personal finance management service and TurboTax Live is an online service allowing you to connect and get tax advice from certified experts. We decided to go with the former, which was initially the road less taken, but we saw it as a good chance to go wide and be more creative and free.
<br /><br />
First, we had to <b>understand the problem at hand</b> - what were we trying to solve?
Quoted from the design brief given by Intuit, they wanted to have “a network that helps users understand how to better use the product, how to focus their efforts on finances, what they should be thinking about, and creative ways to manage their money.” They also gave two personas to accommodate - <b>Attack Mode users and Wake-Up-Call users</b>. Attack Mode users are those who are already progressing on their own financial journey, but need assurance that they’re taking the best actions and want to stay on track. Wake-Up-Call users are those who have experienced some fatal alarm in their finances and now want to start better managing their finances. Important points to hit were creating a safe, engaged, supportive and trustworthy community for all Mint users. Considerations included how to structure the community, its link with the actual Mint application itself, profitability, content type and such.
<br /> <br />
At the end of the sprint, which lasted ~4 hours, we were required to present our creative process and a deliverable in the form of an interactive paper or digital prototype. During the creative process, the judges were really looking for us teams to apply <b>Intuit’s D4D (Design for Delight)</b> process in which we should highlight deep customer empathy, a “go broad to go narrow” approach, and rapid experimenting with customers.
</p>

<h5 id="dce">Deep Customer Empathy</h5>
<p>
To start off, we took a couple minutes just to go through the design brief individually and highlight key issues that we needed to address or key criteria to hit. We used a lot of Post-its, and I mean a lot. Taking over the desks and then the surrounding walls, we split up into two teams to come up with a spectrum of ways to approach the identified issues and criteria. One team took a more broad approach, while the other took a more narrow approach, zooming in on the two personas given. This way, when we came back together as a whole, we could find the <b>overlapping ideas</b> or the most stand-out issues to conquer and allow ourselves to give some scope and focus to our solution, while ensuring that we target critical areas.
<br />
<img  src = {require('../../Assets/DCE.png')} width="100%" alt="" />
<br />
</p>
<h5 id="gbtgn">Go Broad to Go Narrow</h5>
<p>
I felt so grateful and supported by my team members. At first, it was a little intimidating being surrounded by people who already knew each other, who were familiar with the Design process and who were all around comfortable with voicing out their opinions. Eventually, I realized that if I didn’t try to be more vocal with my ideas and if I didn’t put myself out there, I would really be cheating myself out of the experience. I was thankful that everybody in my group was accepting, and was very rational and respectful about each other’s ideas - so it never felt personal or hurt when an idea was turned down.

So after much discussion and a hundred Post-Its later, we decided to focus on making a separate application, that featured a Q&A forum. We got inspiration from user-reliant media like Quora and Medium - as it was mentioned in the Design Brief from Intuit that their current communication channels such as Facebook and Twitter were very one-sided, with content mostly coming from them, so it was important to shape the community into one where the user is the one making it come to live.
<br />
<img  src = {require('../../Assets/GBTGN.png')} width="100%" alt="" />

Our approach applied the D4D, because we went broad in <b>identifying</b> all the issues that could be addressed, and then narrowed down to what we perceived to be the <b>most critical</b> issues - community engagement, trust and support. From here, we went broad again to pick out <b>all the possible features</b> we could implement to tackle these issues and narrow again to what would be our final implementation.
<br /> <br />
This brainstorming part was <b>one of my favourite parts of the challenge</b>, because I felt so free in having and spitting out any ideas, and writing down whatever was in my head. What’s even better is being able to have somebody else envision your idea with you and build on top of it. For example, one of the ideas I had was to incorporate a news feed type dashboard, akin to a Facebook news feed - in which people could share their financial journeys and updates, to boost that sense of community and allow people to feel connected to those with similar goals/interests. It was considered as one of our possible implementations, but in the end we felt that a Q&A forum would be a more direct and easy way for people to get their answers fast.
<br /> <br />
Using the <b>Q&A forum as our base</b>, we were able to build on that and incorporate <b>user profiles with a ranking system</b>, to indicate reliability and assure users that they can get <b>trustworthy advice</b>. This is similar to a <b>Yelp Elite</b> system. We also chose to include a <b>“clap” reaction system</b>, in which users can award a “clap” to an answer they think is good - inspired by <b>Medium</b> article reactions and <b>Yahoo Answers</b> best answers. We intentionally made this a positive scoring system, so that people could feel <b>safe and comfortable</b> posting answers and engaging in the conversation, instead of being scared of being bashed by other users and flamed for their thoughts - which is common on forums like Reddit.
<br /> <br />
With this direction, we <b>sketched out a general wireframe</b> together on a piece of large scratch paper. Once agreed upon, we proceeded to <b>Figma</b> to start working on our digital prototype. Since we were rushing for time, I let the seniors take the reins on this one and watched and learned (as I have only used Figma once with a tutorial a couple years ago). It was impressive to see the familiar hands at work and how fast they could work and deliver something so seamless.
</p>

<h5 id="rapid">Rapid Experimenting</h5>
<p>
Once we had our ideas sketched out, we asked one of the Intuit employees to help us test out our product or to give any <b>feedback</b>. He made some really good points, while being supportive of our ideas and gave us some cool things to think about. For example, he proposed the idea of strengthening <b>the selling/engagement point for more expert users</b>. Thanks to his prompt, we went back and <b>reiterated</b> our design to see how we could improve on these weak areas. We decided to include an <b>Articles</b> section, where higher ranked users could get paid to write and publish their own articles as well as a <b>‘Message'</b> feature where higher ranked users could be approached and potentially hired as financial coaches. Not only that, but the Articles section could also be linked to the articles being posted on the Mint blog currently, so that we can incorporate content from the business as well. <br /> </p>

<h5 id="final">Final Stretch</h5>
<p>
At the same time, while some worked on realizing these new added features in Figma, some of us also helped to prepare for the presentation itself - making slides and preparing speech points. It all passed by in a whirl and before we knew it, it was time to present!
<br /> <br />
There were a bunch of really good presentations and ideas. In the end, the judges revealed that we had come in as a <b>close second</b> out of five groups. It was originally a tie, and after careful consideration, they decided that we were lacked in presenting our future vision as compared to the winners.
<br /> <br />
Wrapping up the day, a few of us stayed behind to talk to the Intuit representatives and just get to know more about the judging decision, and working at Intuit. It was a super fun experience, and it really made me feel so invigorated. I’d never felt like I belonged somewhere, or that I enjoyed doing the work as much as I did during the design sprint. My favourite part was definitely the initial brainstorming and discussions that we had to decide on the final implementations. I definitely aspire to be as deft and skillful as my seniors not only in technical areas such as Figma, but also in being able to prioritize, empathize and think of both the business and the customer. I learnt so much and met so many amazing people - it was a totally unforgettable experience!
</p>
<h4 id="summ1"> Summary </h4>
<p>
<b>Highlights</b>:
<ul>
<li>Being able to learn from such experienced people, and network with them (both on the side of Intuit and in my own team!).
</li>
<li>Working on a project outside of the classroom.</li>
<li>Feeling inspired to be more independent and confident in pursuing my dreams.
</li>
</ul>
<b>Key Takeaways</b>:
<ul>
<li>It is so important to be open-minded yet rational, when working in a team. </li>
<li>You can accomplish so much in a short amount of time if you set your mind & heart to it.  </li>
<li>You’re only cheating yourself if you don’t put yourself out there. </li>
<li>Don’t be scared to ask for advice from others.</li>
<li>Don’t stop here, keep looking towards the future.</li>
</ul>
<b>Potential Changes</b>:
<ul><li>More thought into potential business models, incorporation with the Mint app itself. </li>
<li>Personalization into suggested topics on the dashboard. </li>
<li>Ability to join groups/circles to make the experience more specific for a deeper connection.
</li>
</ul>
</p>
    </div>
    </div>
</div>

    );
  }
}

export default DFMint;
