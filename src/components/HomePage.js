import React from "react";
import { Link } from "react-router-dom";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <p>
          If you would like to make a new group, click New Group from the drop
          down. If you are looking for your group or group info, click on My
          Group.
        </p>
        <Link to="/newGroup">
          <button>New Group</button>
        </Link>
        <div>
          <h3>What is the Gift Giving Elephant?</h3>
          <p>
            The idea behind the Elephant is to have everyone put their name into
            a bowl. Then one by one, names are picked from the bowl. Everyone is
            given a set dollar amount they are allowed to spend on the person
            they picked. Each person gives 3 ideas to help someone pick out a
            gift for you.
          </p>
          <p>
            There is an option that can be set up by your group admin called
            "Who Can Math"; whoever can get the closest to spending the total
            give amount will be given a prize!
          </p>
        </div>
        <h3>Rules To The Game</h3>
        <ol>
          <li>You cannot go over the amount given.</li>
          <li>
            You cannot tell anyone who you picked until after all gifts are
            passed out and opened.
          </li>
          <li>
            You may trade gifts with anyone other than who you picked unless
            that person asks you to trade.
          </li>
          <li>All gifts must show up to the event wrapped.</li>
          <li>Last but not least - everyone have fun!</li>
        </ol>
      </div>
    );
  }
}
