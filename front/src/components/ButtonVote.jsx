import PropTypes from "prop-types";
import { useState } from "react";

export default function ButtonVote() {
  let [votes, setVotes] = useState(0);

  function onClick() {
    setVotes(votes + 1);
    console.log(`votes=${votes}`);
  }

  console.log("render ButtonVote", votes);
  return (
    <div>
      <button className="btn btn-primary mb-2" onClick={onClick}>
        Vote for it
      </button>
      <output>This artifact currently has {votes} votes</output>
    </div>
  );
}
ButtonVote.propTypes = {
  name: PropTypes.string.isRequired,
};
