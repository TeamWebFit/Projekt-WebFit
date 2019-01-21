import React, { Component } from 'react';
import { } from 'react-bootstrap';
import CheckLogin from '../components/CheckLogin'
import UserProfile from '../components/UserProfile'
import { withCookies, Cookies } from 'react-cookie';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ReactLoading from 'react-loading';

// ===================
// User Page
// A page for testing all components
// ===================


class User extends Component {

  UNSAFE_componentWillReceiveProps(){
    window.location.reload();
  }

  render() {


    const cookies = new Cookies();
    var cookieuser = cookies.get('webfit_user');
    console.log(cookieuser);
    return (
      <div>
        <CheckLogin />
        <Query query={getUser} variables={{ cookieuser }}>
            {({ loading, error, data }) => {
              if (loading) return <ReactLoading type="spinningBubbles" color="#000000" height={'10%'} width={'10%'} />
              if (error) return <div>Error</div>
              if (data.user === null || data.user.length < 0 ){
                return <UserProfile />
              }else{
                var user = data.user;
                console.log(user);
                  //return <UserProfile user={data.user}/>
                  return (
                    <Query query={getWeight} variables={{ cookieuser }}>
                        {({ loading, error, data }) => {
                          if (loading) return <div>Fetching</div>
                          if (error) return <div>Error</div>
                          if (data.weight === null || data.weight.length < 0){
                            return <UserProfile user={user} />
                          }else{
                            var weight = data.weight;
                            console.log(weight);
                            return <UserProfile user={user} weight={weight}/>
                          }
                        }}
                    </Query>
                  )
              }              
            }}
        </Query>
      </div>
    )

  }
}

const getUser = gql`
        query Cookieuser($cookieuser: ID){
          user(id: $cookieuser){
            id,
            name,
            firstName,
            email,
            dateOfBirth,
            gender,
            height,
            profilePic
          }
        }
        `
const getWeight = gql`
      query getWeight($cookieuser: ID){
            weight(userId: $cookieuser)
              {
                time
                value
              }
            }
            `

export default User;
