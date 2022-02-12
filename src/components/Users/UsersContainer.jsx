import React from "react";
import { connect } from "react-redux";
import { follow, requestUsers, setCurrentPage,  toggleFollowingInProgress, unfollow } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { getcurrentPage, getFollowingInProgress, getisFetching, getPageSize, getTotalUsersCount, getUsers} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount(){
        let {currentPage,pageSize}=this.props
        this.props.requestUsers(currentPage,pageSize);
        // this.props.toogleIsFetching(true);
        // userAPI.getUsers(this.props.currentPage, this.props.pageSize)
        // .then(data => {
        //     this.props.toogleIsFetching(false);
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // })
    }
  onPageChanged = (pageNumber)=>{
      let {pageSize} = this.props
    this.props.requestUsers(pageNumber,pageSize);
    // this.props.toogleIsFetching(true);
    //   this.props.setCurrentPage(pageNumber);   
    //   userAPI.getUsers(pageNumber, this.props.pageSize)
    //   .then(data => {
    //     this.props.toogleIsFetching(false);
    //       this.props.setUsers(data.items)
    //   })
  }
    render(){
        return  <>
        {this.props.isFetching ? 
        <Preloader/>
        : null }
         <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} 
        currentPage={this.props.currentPage}
        users={this.props.users}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followingInProgress={this.props.followingInProgress}
        />
        </>

}
}

// let mapStateToProps = (state) => {

//     return {

//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
    
// }

let mapStateToProps = (state) => {

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getcurrentPage(state),
        isFetching: getisFetching(state),
        followingInProgress: getFollowingInProgress(state),
        
    }
    
}
/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) =>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) =>{
            dispatch(setTotalUsersCountAC (totalCount))
        },
        toogleIsFetchingAC: (isFetching)=>{
            dispatch(toogleIsFetchingAC(isFetching))
        }
    }
}
*/
export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingInProgress,
        requestUsers,
        }),
)(UsersContainer)
