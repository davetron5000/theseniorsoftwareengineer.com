import React from "react";
import Layout from "../components/Layout";

export default function(props) {
  return(
    <Layout>
      <a name="top">&nbsp;</a>
      <section className='content'>
      <div className="sect1">
      <h2 id="_interview_potential_co_workers">Interview Potential Co-Workers</h2>
      <div className="sectionbody">
      <div className="paragraph"><p></p></div>
      <div className="paragraph"><p>During your time at any given company, new employees will be brought on. You might be involved in this process, helping to vet potential candidates, or you might be in a position to establish a hiring process from scratch.</p></div>
      <div className="paragraph"><p>In either case, your job is to identify developers who can work well with you and your team.  You need developers who can deliver results, just like you do.  And it&#8217;s difficult.</p></div>
      <div className="paragraph"><p>In this chapter we&#8217;ll cover technical interviewing from two perspectives.  First, we&#8217;ll outline what I believe to be an ideal process.  I&#8217;ve been on both sides of this process and it&#8217;s effective and efficient at identifying good developers.  After that, we&#8217;ll talk about other types of technical interviews that are less effective but that you might be required to conduct as part of an existing interview process.  We&#8217;ll see how to get the most out of them.</p></div>
      <div className="paragraph"><p>Note that we&#8217;ll just be covering the technical interview portion of recruiting, as this is the portion you&#8217;re likely to be a part of.  Discovering candidates, checking references, and other non-technical aspects of the hiring process are outside the scope of this book.</p></div>
      <div className="sect2">
      <h3 id="_ideal_technical_interview">Ideal Technical Interview</h3>
      <div className="paragraph"><p>Although each company and candidate are different, you can reliably follow a four step process to determine if a candidate is a good fit:</p></div>
      <div className="olist arabic"><ol className="arabic">
      <li>
      <p>
      Informal technical discussion to meet and get to know the candidate
      </p>
      </li>
      <li>
      <p>
      Have the candidate do a &#8220;homework assignment&#8221;
      </p>
      </li>
      <li>
      <p>
      Conduct a technical phone screen
      </p>
      </li>
      <li>
      <p>
      Pair program with the candidate in person.
      </p>
      </li>
      </ol></div>
      <div className="paragraph"><p>Although you&#8217;ll want to conduct each step of this process consistently, you should take into account the role you are looking to fill as well as aspects about the particular candidate in question.  We can place these two factors along two axes.</p></div>
      <div className="paragraph"><p>Along one axis is the candidate - how well do you know them?  Have you worked with the candidate, and can vouch for them, or is it someone you don&#8217;t know at all?</p></div>
      <div className="paragraph"><p>The second axis is the organization&#8217;s need - the role to be filled.  How much impact will this person have?  Someone in a key position or on a very small team will have a much larger impact than a &#8220;rank and file&#8221; developer who will be building out features as part of a large, established team.  Not everyone needs to (or should) have a huge impact, so it&#8217;s important to be honest about what you&#8217;re looking for.</p></div>
      <div className="paragraph"><p>For each step that follows, we&#8217;ll discuss if it applies to your situation (based on our two-axis approach) and if it does, how to execute that part of the process.</p></div>
      <div className="sect3">
      <h4 id="_informal_technical_conversation">Informal Technical Conversation</h4>
      <div className="paragraph"><p>This is exactly what it sounds like: a simple, human conversation between two professionals, &#8220;geeking out&#8221; about technology.  The idea is to provide a relaxed environment where you can get a feel for who the person is as a developer.  This should not be a harsh &#8220;Q&amp;A&#8221; looking for esoteric technical knowledge.  It should be informal and relaxed, but focused.</p></div>
      <div className="paragraph"><p>You want to make sure to cover the following things in your conversation:</p></div>
      <div className="ulist"><ul>
      <li>
      <p>
      What your company does and why anyone would work there
      </p>
      </li>
      <li>
      <p>
      What problems the company has that the candidate might solve
      </p>
      </li>
      <li>
      <p>
      What the candidate might expect to work on
      </p>
      </li>
      <li>
      <p>
      The candidates thoughts on technology in general, but also related
      to what your team uses and what the candidate is familiar with
      </p>
      </li>
      <li>
      <p>
      Interesting problems the candidate has solved and what excites them about the position
      </p>
      </li>
      <li>
      <p>
      Any questions the candidate has about the company
      </p>
      </li>
      </ul></div>
      <div className="paragraph"><p>For candidates you know, this is crucial.  It lets them know that you aren&#8217;t treating them as just another résumé and that you have respect for them and their work.  It&#8217;s also a good chance to &#8220;sell&#8221; the candidate on your company without starting a formal interview process.</p></div>
      <div className="paragraph"><p>For candidates you do not know, but who you&#8217;re hiring in a senior or key position, I would highly recommend this as well, because it&#8217;s one of the best ways to get a sense of them as a person, including their curiosity, personality, thoughtfulness and higher-level decision-making ability.</p></div>
      <div className="paragraph"><p>For candidates you don&#8217;t know, but who are being considered for a junior position, this is less important, and can be done as the last half-hour of an in-person interview, possibly with the candidate&#8217;s prospective manager.</p></div>
      </div>
      <div className="sect3">
      <h4 id="_homework_assignment">Homework Assignment</h4>
      <div className="paragraph"><p>Here, you give the candidate a coding assignment that they work on at home over a few days or a week at most.  It should be a problem that requires more work than just implementing a function, but not so complex that it requires a huge time commitment.  It should also be a problem that has many possible solutions but that you can evaluate easily.</p></div>
      <div className="paragraph"><p>The idea here is to examine the candidate&#8217;s code, when written in an ideal environment and not under pressure at a whiteboard or on a large screen attached to a laptop.</p></div>
      <div className="paragraph"><p>Be specific about anything you want the candidate to do, but keep in mind that every omitted detail is a chance to learn something about how the candidate thinks.  For example, if you fail to document how you&#8217;d like the assignment submitted, you might get a <span className="monospaced">.zip</span> file, or you might get a link to a GitHub repository, or you might get copy and pasted code.  This can be informative.</p></div>
      <div className="paragraph"><p>I would also recommend that you schedule the technical phone screen (discussed in the next section) when you give out the assignment.  The candidate is going to spend his or her time writing code for you, for free, and you owe it to them to review it and have a conversation about it. Scheduling the phone screen is the best way to do that.</p></div>
      <div className="paragraph"><p>Finally, have a rubric for evaluating the work.  It&#8217;s important that you evaluate every candidate&#8217;s work fairly and equally,
        which can be tricky for subjective attributes such as code quality.  A rubric makes sure you check everything and don&#8217;t over or under-weigh aspects of the solution.</p></div>
      <div className="paragraph"><p>For candidates you do not know, this is a crucial vetting technique for any level.  Candidates for senior or key positions should handle this assignment easily.  Other candidates should produce quality results and can use it as a chance to shine.</p></div>
      <div className="paragraph"><p>For candidates you already know, this might be something you can skip.  Candidates know that homework assignments are for vetting and &#8220;weeding out&#8221;, so
      giving one to someone whose abilities you are already familiar with can be seen as insulting.  This could work against you by preventing strong candidates from continuing through the hiring process.</p></div>
      <div className="paragraph"><p>If you must give these assignments to everyone (it is often a legal requirement to be consistent in all candidate evaluations,
          depending on where you live), make sure to let the candidate know that, while you are sure of their abilities, your company
      requires everyone to do these assignments; it&#8217;s nothing personal.  Of course, grade them fairly. On occasion, someone will disappoint you and it&#8217;s better to find out now.</p></div>
      </div>
      <div className="sect3">
      <h4 id="_technical_phone_screen">Technical Phone Screen</h4>
      <div className="paragraph"><p>The technical phone screen is crucial for candidates you do not know.  It&#8217;s called a &#8220;screen&#8221; because the idea is to &#8220;screen out&#8221; candidates who will be unlikely to pass an in-person interview. Bringing a candidate in for a face-to-face interview is expensive and time consuming.  The technical phone screen ensures that you keep those expenses to a minimum and don&#8217;t waste anyone&#8217;s time by bringing in someone who is unlikely to be a good fit.</p></div>
      <div className="paragraph"><p>A candidate you know and who is interested should be fast-tracked to an in-person interview if possible.  In this case, a phone screen could be a barrier to hiring.  If your company insists that everyone follow the same process (again, this could be for legitimate legal reasons), make sure to let the candidate know that it&#8217;s your company&#8217;s hiring policy and not a reflection on your respect for their skills.  To be fair however, have another developer conduct the phone screen.</p></div>
      <div className="paragraph"><p>In any case, once you get the candidate on the phone, tell them your name, your position or title, what you work on (if it would make sense to them), and then outline the structure of the interview:</p></div>
      <div className="ulist"><ul>
      <li>
      <p>
      Technical questions
      </p>
      </li>
      <li>
      <p>
      Discussion of the homework
      </p>
      </li>
      <li>
      <p>
      Questions the candidate has for you
      </p>
      </li>
      </ul></div>
      <div className="sect4">
      <h5 id="_technical_questions">Technical Questions</h5>
      <div className="paragraph"><p>Steve Yegge has an
      <a href="https://sites.google.com/site/steveyegge2/five-essential-phone-screen-questions">excellent
      post</a> about technical questions to ask during a phone screen.
      I&#8217;ve used his technique on many phone screens and find it effective at identifying candidates who are knowledgeable.</p></div>
      <div className="paragraph"><p>He asks five questions that cover a wide range of computer science, each designed to test for what he feels is basic knowledge any programmer should have:</p></div>
      <div className="ulist"><ul>
      <li>
      <p>
      Write some code for a simple problem
      </p>
      </li>
      <li>
      <p>
      Talk about software design
      </p>
      </li>
      <li>
      <p>
      Demonstrate knowledge of scripting languages
      </p>
      </li>
      <li>
      <p>
      Demonstrate knowledge of data structures
      </p>
      </li>
      <li>
      <p>
      Demonstrate basic understanding of bit manipulation
      </p>
      </li>
      </ul></div>
      <div className="paragraph"><p>These might not make sense for your or your company, but pay attention to how they are organized.  These five types of questions
      cover a very broad range of programming knowledge, from high level design, to low level bytes, to pragmatic use of scripting
      languages.  Design your phone screen questions similarly and always use the same ones each time. If you find candidate are
      passing your phone screen but failing the in-person part of the interview, ask more difficult questions in the phone screen for future candidates.</p></div>
      <div className="paragraph"><p>As you talk, be sure to write down the candidate&#8217;s answers.  Don&#8217;t just check &#8220;got it&#8221; or &#8220;missed it&#8221;.  Describe what their answers were.  The reason for this is that if a candidate does well but doesn&#8217;t nail the in-person interview, your notes from the phone screen might help make a final decision.</p></div>
      </div>
      <div className="sect4">
      <h5 id="_discussion_of_the_homework">Discussion of the Homework</h5>
      <div className="paragraph"><p>The candidate spent time on the homework assignment and deserves to have it reviewed by a developer.  Discussing code is also a great way to get a feel for how the developer thinks and approaches a problem.  If you haven&#8217;t already reviewed the candidate&#8217;s homework (I recommend the reviewer and phone screener be the same person), do so before the interview.</p></div>
      <div className="paragraph"><p>You should have a list of questions and comments about the code, but first get the candidate talking about the assignment.  What was their approach?  Was it easy? Challenging? Confusing?</p></div>
      <div className="paragraph"><p>Once the candidate has given you their overview of the assignment, go through your list of questions and comments.  Be sure to praise anything you liked about their solution.  This will make discussing negatives easier, but will also demonstrate that you value good work and will openly praise it (a selling point for you and your company).</p></div>
      <div className="paragraph"><p>Keep it casual and avoid any divisive arguments.  Your goal is to understand how the candidate thinks when solving a problem, not to prove that your particular solution is the best.</p></div>
      </div>
      <div className="sect4">
      <h5 id="_questions_the_candidate_has_for_you">Questions the Candidate has for You</h5>
      <div className="paragraph"><p>When you&#8217;ve got what you need, it&#8217;s important to let the candidate ask questions of you.  The candidate will certainly be curious about the company and you can use this time to &#8220;sell&#8221; them on it.</p></div>
      <div className="paragraph"><p>Be sure to be honest with your answers.  If you are asked about something that wouldn&#8217;t put the company in a good light, be honest, but put a positive spin on it.</p></div>
      <div className="paragraph"><p>I worked a job once with almost 100 applications in production.  One of the older applications had a very challenging codebase
      that everyone ended up having to work with for various reasons.  When a candidate asked me about, I was honest: the codebase is
      not fun to work with. But, I turned it into a positive:  management knew about the problems and was in full support of the team porting or refactoring the problem areas.</p></div>
      <div className="paragraph"><p>Once you&#8217;ve answered all the candidate&#8217;s questions (or the time is up), thank them for their time, and let them know that they&#8217;ll hear from someone one way or the other.  If they did exceptionally well, and you&#8217;re sure you&#8217;d like to meet in person, definitely let them know.  If, on the other hand, they did poorly and are unlikely to be called in for an in-person interview, keep that to yourself and discuss it with your hiring manager, recruiter, or simply sleep on it.</p></div>
      </div>
      </div>
      <div className="sect3">
      <h4 id="_pair_programming">Pair Programming</h4>
      <div className="paragraph"><p>When a candidate comes in for an in-person interview, or otherwise has passed the phone screen, you should be confident that the candidate can code and can work on the team.  The last step is to find out for sure.</p></div>
      <div className="paragraph"><p>The best way to find out if the candidate can really code and really be a part of your team is to pair program with them.  You should do this for every candidate, regardless of position or previous experience.</p></div>
      <div className="paragraph"><p>In a normal pair programming scenario, the two developers equally divide their time between typing code and watching the typer.  For the interview, I would let the candidate do most of the typing. This will be most comfortable for someone not used to pair programming, but is also a good way for you to evaluate them, since your head won&#8217;t be in coding, but in observing them navigate the problem.  I&#8217;d recommend you have them bring their personal development laptop to the interview.</p></div>
      <div className="paragraph"><p>As to the problem to work on, it  depends on several factors.  If you are a small startup, or are hiring someone in a key position, I would recommend spending over an hour on a real problem (or as real as you are comfortable with).  Working on a legitimate problem you yourself might have to solve will be the best way to see how the candidate performs.</p></div>
      <div className="paragraph"><p>For larger teams, or for hiring more junior developers, I&#8217;d recommend using a simpler problem that can be solved in about 30 minutes, and use the same problem for everyone.</p></div>
      <div className="paragraph"><p>In either case, you want to allow the candidate to do whatever they need to in order to keep working.  Allow them to search the Internet, ask questions, look things up, or do anything else they&#8217;d be able to do if they really worked with you.  This is a real-world simulation.</p></div>
      <div className="paragraph"><p>If the candidate gets stuck, give hints as necessary to keep them working.  It&#8217;s better to get the candidate to a solution with help than let them struggle and use up all their time.</p></div>
      <div className="paragraph"><p>At the end of the programming session, you should have a good feel as to how this person works, and if they would be a good fit for the team.</p></div>
      <div className="paragraph"><p>Many companies use a wide variety of other interview types (which we&#8217;ll cover in the next section) but in my experience,
      actually coding with someone is the only way to be sure.  The only better way would be to hire then for a one to two week project, but this is often infeasible.</p></div>
      <div className="paragraph"><p>Once you&#8217;ve taken the candidate through this process, your next job is to make a decision: do you extend them an offer?</p></div>
      </div>
      <div className="sect3">
      <h4 id="_making_a_decision">Making a Decision</h4>
      <div className="paragraph"><p>Once you&#8217;ve completed the interview process, you&#8217;ll need to make a hiring decision.  If you did the entire interview by yourself,
      it&#8217;s easy:  decide based on what you experienced.  It&#8217;s more likely that you weren&#8217;t the only one involved.  This means that everyone who <em>did</em> participate has some vested interest in the decision.</p></div>
      <div className="paragraph"><p>It&#8217;s also important that whoever will be assembling that offer (which will include salary and other compensation) has a strong understanding of the strengths and weaknesses of the candidate.  To this end, I would recommend that everyone involved in the interview meet as soon after the candidate is done as possible and discuss the candidate&#8217;s performance.</p></div>
      <div className="paragraph"><p>Let everyone get comfortable talking about the candidate and weighing in on how they performed.  Make sure you hear from each
      person.  I&#8217;d recommend going around one-by-one and getting verbal feedback.</p></div>
      <div className="paragraph"><p>Next, call for a vote.  Everyone should vote either &#8220;hire&#8221; or &#8220;no-hire&#8221; and everyone should vote at the same time.  An easy
      way to do this is to count to three and have everyone give a thumbs-up or thumbs-down. Doing it this way prevents &#8220;anchoring&#8221;
      where people vote with the majority who might actually have reservations.  You need the most honest feedback you can get.</p></div>
      <div className="paragraph"><p>At this point, anyone who voted &#8220;hire&#8221; should be given the chance to convince anyone who voted &#8220;no-hire&#8221; to change their
      vote.  Allow for votes to be called for again but, once each person seems content with their vote, make a decision.</p></div>
      <div className="paragraph"><p>I&#8217;d recommend you make an offer only if everyone voted &#8220;hire&#8221;.  This means you allow anyone to veto the candidate.  The reasons are threefold:</p></div>
      <div className="ulist"><ul>
      <li>
      <p>
      It&#8217;s possible the &#8220;no-hire&#8221; is aware of a shortcoming that everyone else isn&#8217;t, but isn&#8217;t quite able to explain it.  It doesn&#8217;t mean the shortcoming is invalid.
      </p>
      </li>
      <li>
      <p>
      It&#8217;s safer to walk away if you aren&#8217;t 100%.  There is more risk in a bad hire than missing out on a great hire.  This is especially true of candidates who will have a
      large impact.
      </p>
      </li>
      <li>
      <p>
      The team&#8217;s morale will start to suffer if their objections are ignored.  Disregarding a &#8220;no-hire&#8221; vote sends a message that
      the employee&#8217;s participation in the process provided no value; you would&#8217;ve reached the same outcome had they not participated at all.
      </p>
      </li>
      </ul></div>
      <div className="paragraph"><p>This is the ideal interview process.  Many organizations have their own process, which interviewers are asked to follow.  Even if you can&#8217;t conduct the ideal process we&#8217;ve outlined here, you can still get a lot of value out more &#8220;traditional&#8221; interviewing techniques.</p></div>
      </div>
      </div>
      <div className="sect2">
      <h3 id="_other_types_of_interviews">Other Types of Interviews</h3>
      </div>
      </div>
      </div>
      <div className='sect1'>
        <a rel="nofollow" href="https://sowl.co/3cYah">Buy now to read more…</a>
      </div>
    </section>
    </Layout>
  )
};
