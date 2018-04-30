const yesNoButtons = <div className="yes-now-buttons row">
  <div className="column">
    <button className="buttonNo">No</button>
  </div>
  <div className="column">
    <button className="buttonYes">Yes</button>
  </div>
</div>;

const steps = [
  {
    label : <div>
      <h2>If you are currently working, <a href="#1" className="workingStart">start here</a>.</h2>
      <h2>Otherwise, <a href="#2" className="unemployedStart">start here</a>.</h2>
    </div>,
    input : null
  },
  {
    label : <div>
      <p>
        Where are you now?<br />
        Think about your current job— who you work with, what you are working on, your professional environment, and your lifestyle.
      </p>
      <h2>What about your current position do you really like?</h2>
      <p>(Select all that are true.)</p>
    </div>,
    input : <div>
      <ul className="inputList">
        <li>
          <input type="checkbox" id="currentLikePeople" />
          <label for="currentLikePeople" className="label-inline">
            I really like the people I work with.
          </label>
        </li>
        <li>
          <input type="checkbox" id="currentLikeProduct" />
          <label for="currentLikeProduct" className="label-inline">
            I like the project/product I am working on, or I like purpose that the project/product I am working on serves.
          </label>
        </li>
        <li>
          <input type="checkbox" id="currentLikeTech" />
          <label for="currentLikeTech" className="label-inline">
            I like the tech stack I am using.
          </label>
        </li>
      </ul>
      <button className="nextButton">Next</button>
    </div>
  },
  {
    label : <div>
      <h2>Do you feel that you are very proficient at what you do in your current position?</h2>
    </div>,
    input : yesNoButtons
  },
  {
    label : <div>
      <h2>Do you feel that you are learning a lot from your work environment or team?</h2>
    </div>,
    input : yesNoButtons
  },
  {
    label : <div>
      <h2>Do you feel like you are receiving the monetary compensation that you deserve?</h2>
    </div>,
    input : yesNoButtons
  },
  {
    label : <div>
      <h2>Do you feel that you have freedom and life balance?</h2>
    </div>,
    input : yesNoButtons
  },
  {
    label : <div>
      <p>
        Where do you want to be?<br />
        Think about your values, and what is most important to you if you could work in your ideal environment.
      </p>
      <p>(Select all that are true.)</p>
    </div>,
    input : <div>
      <ul className="inputList">
        <li>
          <input type="checkbox" id="desiredLikePeople" />
          <label for="desiredLikePeople" className="label-inline">
            Is it important that you are working with people you like?
          </label>
        </li>
        <li>
          <input type="checkbox" id="desiredLikeProduct" />
          <label for="desiredLikeProduct" className="label-inline">
            Is it important that you are working on a project/product that you care about, or a project/product that serves a purpose you care about?
          </label>
        </li>
        <li>
          <input type="checkbox" id="desiredLikeTech" />
          <label for="desiredLikeTech" className="label-inline">
            Is the tech stack you are using important to you?
          </label>
        </li>
      </ul>
      <button className="nextButton">Next</button>
    </div>
  },
  {
    label : <div>
      <h2>Is it important that you are proficient in the work you are doing?</h2>
    </div>,
    input : yesNoButtons
  },
  {
    label : <div>
      <h2>Is it important to you that you are learning new things?</h2>
    </div>,
    input : yesNoButtons
  },
  {
    label : <div>
      <h2>Is monetary compensation very important to you?</h2>
    </div>,
    input : yesNoButtons
  },
  {
    label : <div>
      <h2>Is freedom and flexibility very important to you?</h2>
    </div>,
    input : yesNoButtons
  },
   
];

export default steps;