import React, { Component } from 'react';
import Header from '../headerComponent/header';
import Carousel from '../carouselComponent/carousel';

class Ucsd extends Component {
  render() {
    return (
      <div>
      <Header />
      <div className="aboutMe">
          <h1>Redesigning the UC San Diego App</h1>
      <div className="myCard">
      <img src= {require('../../Assets/UCSD/UCSDCompile5.png')} width='90%' />
<br />
      <h6><div className="role">ROLE:</div> UX/UI Designer, UX Researcher</h6>
      <h6><div className="role">Point of View:</div> Students' daily lives and experiences on campus can be enriched with the help of technology. Quality over quantity.</h6>
      <h6><div className="role">Achievement:</div> Top presentation within Studio, Overall Grand Prize Winner for People's Choice Awards.</h6>
<br />
<h4 id="what">What is the UC San Diego App?</h4>
  <p>
The current UC San Diego application is one often promoted by Orientation Leaders and Campus Ambassadors to new students like Freshmen and Transfers to get them acquainted with the school.
</p>
<br />
<h4 id="why">The Problem</h4>
<p>
Our research made it clear that the current application is <b>not fulfilling the needs of the students</b>.
This was made clear through our research, where we found that 10 out of 21 of the students we interviewed did not even have the application on their phone and had never used the application before.
Furthermore, some had never used it since they first downloaded in in their Freshmen year etc. indicating low frequencey of usage. On the other hand, there was high usage of
other school-affiliated applications, such as Blackboard, transportation-related apps and finance-related apps, showing that there is a lot of use that can be put into a school application, that students are finding in
other applications, but not in the UC San Diego application itself. Ultimately, 85% of our interviewees stated that they would not increase usage of the application after we had them play around with it.
</p>
<p>We broke it down to three main reasons:</p>
<div className="container2">
  <div className="row">
    <div className="col-sm">
    <img src={require('../../Assets/UCSD/OriFunctions.gif')} height='20%'/>
      <h6><b>Overload of Unnecessary Functions</b></h6>
    The original app has 8 different cards (Classes, Shuttle, Parking, Dining, Events, News, Weather, Links) on the homepage, 4 tabs on the bottom (Home, Map, Notifications, Profile). Only 3 of these functions actually get used regularly.
  </div>
    <div className="col-sm">
    <img src={require('../../Assets/UCSD/OriLinks.gif')} height='20%'/>
    <h6><b>External Links</b></h6>
    Many of the functions in the application are buttons that lead you to an external link that opens in your browser, taking you to the
    UCSD Website, which is both annoying and pointless if you're coming from the app itself.
    </div>
    <div className="col-sm">
    <img src={require('../../Assets/UCSD/Class-Ori.gif')} height='20%'/>
    <h6><b>Lack of Effective Info/Structure</b></h6>
    Interestingly enough, people struggled most with the functions that were identified as the main uses for the app.
    </div>
  </div>
</div>
<h4 id="whytelur">The Process</h4>
<p>We applied a reiterative process to our design, using the Double Diamond of Design as a model - ensuring we find the right problem through Ideation and Research, and the right solution through Iterative Prototyping. </p>
<h5>Ideation</h5>
<p>We crafted mind maps together, rough ones at first with all possible users of the UC San Diego app and what they might want to use it for. Eventually, we narrowed down our scope to just students as a user group as they are the most relatable, accessible and populous user group. With this, we refined our mind map focusing on students and their use cases.</p>
<img src={require('../../Assets/UCSD/MindMap.png')} width='60%' />
<br />
<h5>Data Gathering</h5>
<p>We conducted interviews with 21 UC San Diego students, selected at random across different locations on campus. We had 3 pre-interview questions to collect demographics and existing usage, 10 activity instructions as part of a task set to test available functions and allow them to experience the app, and ended with 7 post-activity questions to clarify mental models, obtain quantitative ratings and qualitative thoughts.</p>
<h5>Analysis & Identifying Trends</h5>
<p>Based on our interview findings, we decided to focus our redesign on only 4 main functions: Classes, Shuttles, Dining and Spaces. With ideas on how to improve and implement these functions, we worked on sketching out different iterations and layouts of each of these pages, critiquing each together.
</p>
<h6>Rapid Protoyping/Wireframing</h6>
<img src={require('../../Assets/UCSD/RapidProto.png')} width='90%' />
<br />
<p>When we had settled on the final redesign, I used Adobe XD to create a higher-fidelity prototype of the redesign.</p>

<h4 id="redesign">The Redesign</h4>
<div className="container">
<div className="row">
<div className="col">
<p><br/><br/><br/><br/><br/>We kept the simple and minimalistic feel of the application and stuck to having everything in the application in one page. For the Classes page, we implemented a calendar view, using bold colors to differentiatie activities and highlight importnat information as well as blocks to indicate relativity of duration. We also added the ability to view and change grading/enrollment options in-app.</p>
</div>
<div className="col">
<img src={require('../../Assets/UCSD/Classes-Red.gif')} width='50%' />
</div>
</div>

<div className="row">
<div className="col-3">
<img src={require('../../Assets/UCSD/shuttlered1.gif')} width='90%' />
</div>
<div className="col-3">
<img src={require('../../Assets/UCSD/shuttlered2.gif')} width='90%' />
</div>
<div className="col-6">
<p><br/><br/><br/>For the Shuttle page, we decided to simplify the whole interaction by allowing the user to search by Destination and also by putting out all the knowledge in the world in terms of all available shuttles and essential info in one glance. From there, users can explore shuttles they're interested in for more details. We also included navigation capabilities in-app.</p>
</div>
</div>

<div className="row">
<div className="col">
<p><br/><br/><br/><br/><br/><br/><br/>To improve the Dining page, we added a feature where users can see reviews of each of the dining places on campus. On top of that, you could also sort the list of eateries, by rating or alphabetical or distance.</p>
</div>
<div className="col">
<img src={require('../../Assets/UCSD/diningred.gif')} width='50%' />
</div>
</div>

<div className="row">

<div className="col">
<img src={require('../../Assets/UCSD/spacesred.gif')} width='50%' />
</div>
<div className="col">
<p><br/><br/><br/><br/><br/><br/><br/>Finally, we introduced a new function called Spaces. This allows users to see the availability in different campus spaces, which we categorized by function (Study, Parking, Recreation). Additionally, we added the ability to Reserve Spaces/Rooms here according to your criteria.</p>
</div>
</div>


</div>


<h4 id="summ"> Summary </h4>
<p>
<b>Key Takeaways</b>:
<ul>
<li>More is not always better. Do something, and do it good.</li>
</ul>
<b>Potential Changes</b>:
<ul><li>Adding a Discussion Board section, or expanding the application to behave differently for different user groups (students version, faculty version etc.) </li>
<li>Implementing notifications that alert you when you're late to a class or event.
</li>
<li>Implementing a campus-dedicated map with better indoor navigation.
</li>
<li>Incorporating a planner that accounts for travel time from one place on campus to another.</li>
</ul>
We also produced a short video showcasing the problems we were trying to solve, which you can view on Youtube <a href="https://www.youtube.com/watch?v=2uT4UO8JWVw">here</a>. A viewable copy of the complete project write-up can be found <a href="https://docs.google.com/document/d/1zy91dpxHN36MMjj6qKh9Kk132rHMclVUF8PhJa1lCrs/edit?usp=sharing">here</a>. Finally, we presented our project to our studio class and were selected amongst 8 other groups to present our project to the entire class during lecture. Among the 3 selected presentations, we won the Grand Prize of a pizza gift card! It was a truly insightful and exciting project to work on with my friends and teammates and I hope for more opportunities like this in the future! </p> 
    </div>
    </div>
</div>

    );
  }
}

export default Ucsd;
