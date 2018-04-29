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
      <button className="currentLikeNext">Next</button>
    </div>
  }
];

export default steps;