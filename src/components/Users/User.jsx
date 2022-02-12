import React from "react";
import styles from './users.module.css';
import userPhoto from '../../assets/images/images.png';
import { NavLink } from "react-router-dom";
let User = ({user,followingInProgress,follow,unfollow}) => {
let u = user;
    return (
        <div>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button disabled={followingInProgress.some(id=>id===u.id)}onClick={() => {
                                //     axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{withCredentials:true,
                                // headers:{
                                //     "API-KEY":'d3b1d138-c47a-4134-a8f0-79032b8de450'
                                // }})
                                unfollow(u.id);
                                }}>unfollow</button>
                                : <button disabled={followingInProgress.some(id=>id===u.id)} onClick={() => {
                                    // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{withCredentials:true,
                                    // headers:{
                                    //     "API-KEY":'d3b1d138-c47a-4134-a8f0-79032b8de450'
                                    // }})
                                    follow(u.id);
                                }}>follow</button>}

                        </div>
                    </span>

                    <span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {"u.location.country"}
                            </div>
                            <div>
                                {"u.location.city"}
                            </div>
                        </span>
                    </span>

                </div>
    )
}
export default User;