import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import {Button} from 'react-bootstrap';


const DELETE_TRACKER = gql`
  mutation deleteTracker(
    $id: ID!
  ) {
    deleteTracker(
      id: $id
    ) {
      id
    }
  }
`;

const RemoveButton = ({id}) => {
    //console.log(id)
  return (

      
    <Mutation
      mutation={DELETE_TRACKER}
      >
      {(deleteTracker, { data }) => (
        <Button bsStyle="danger"
          onClick={e => {
            deleteTracker({
              variables: {
                id
              }
            });
          window.location.reload()}}
        >Ja, Tracker entfernen</Button>            
      )}
    </Mutation>
  );
};

export default RemoveButton;