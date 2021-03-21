import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePost, patchPost } from '../../actions/postsActions';
import styles from './Post.module.scss';

const Post = (props) => {
    const { item } = props;
    const dispatch = useDispatch();
    const patchHandler = () => {
        if (item.isMark) return dispatch(patchPost(item.id, {isMark: false}));
        return dispatch(patchPost(item.id, {isMark: true}));
    }
    return (
        <li className={styles.wrapper}>
            <div className={styles.post}>
                <p>Post № {item.id}</p>
                <h3 className={styles.postTitle}>{item.title}</h3>
                <p className={styles.postBody}>{item.body}</p>
            </div>
            <div className={styles.navBar}>
                <Link to={`/edit/${item.id}`}>
                    <button type="button">
                        <img className={styles.icon} alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTE0OC4wOTQ2OSw2Ljc5MjY2Yy00LjMsMCAtOC42MDQwMywxLjYzNjY5IC0xMS44NzIwMyw0LjkwNDY5bC0yLjc0Nzk3LDIuNzQ3OTdsMjMuNzMwNjMsMjMuNzM3MzRsMi43NTQ2OSwtMi43NDc5N2M2LjUzNiwtNi41MzYgNi41MzYsLTE3LjIwMTM0IDAsLTIzLjczNzM0Yy0zLjI2OCwtMy4yNjggLTcuNTY1MzEsLTQuOTA0NjkgLTExLjg2NTMxLC00LjkwNDY5ek0xMjguOTM5NTMsMjAuOTQ5MDZjLTAuODkzNzEsMC4wMjY2MyAtMS43NDE5NCwwLjQwMDE0IC0yLjM2NSwxLjA0MTQxbC0xMTEuOCwxMTEuNDUwNjNjLTAuNDMyMSwwLjQyODYgLTAuNzQyNzcsMC45NjQxNiAtMC45MDAzMSwxLjU1MjAzbC02Ljg4LDI1LjhjLTAuMzE3NTcsMS4xODY5MiAwLjAyMTk1LDIuNDUzMSAwLjg5MDc1LDMuMzIxOWMwLjg2ODgsMC44Njg4IDIuMTM0OTksMS4yMDgzMiAzLjMyMTksMC44OTA3NWwyNS44LC02Ljg4YzAuNTg3ODcsLTAuMTU3NTQgMS4xMjM0MywtMC40NjgyMSAxLjU1MjAzLC0wLjkwMDMxbDExMS40NTA2MywtMTExLjhjMC45Mjg5MSwtMC44NTcwMSAxLjMxMzEzLC0yLjE1NDMzIDEuMDAwNzMsLTMuMzc4OTdjLTAuMzEyNCwtMS4yMjQ2NCAtMS4yNzExMiwtMi4xNzkzOSAtMi40OTcwNCwtMi40ODY3Yy0xLjIyNTkyLC0wLjMwNzMyIC0yLjUyMTY0LDAuMDgyMjggLTMuMzc0NzksMS4wMTQ3NGwtMTEwLjc2NTMxLDExMS4xMDc5N2wtMTQuMDU1NjMsLTE0LjA1NTYzbDExMS4xMDc5NywtMTEwLjc2NTMxYzEuMDIwNDYsLTAuOTg2NTMgMS4zMzAzMiwtMi40OTg0OSAwLjc4MDE5LC0zLjgwNjljLTAuNTUwMTMsLTEuMzA4NDEgLTEuODQ3MzEsLTIuMTQ0NjggLTMuMjY2MTMsLTIuMTA1NnoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="/>
                    </button>
                </Link>
                <button type="button" onClick={patchHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         width="30" height="30"
                         viewBox="0 0 172 172"
                         className={styles.icon}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none"></path><g className={item.isMark ? styles.iconColorActive :styles.iconColor}><path d="M44.72,6.88c-1.90232,0 -3.44,1.54112 -3.44,3.44v151.36c0,1.23152 0.65688,2.3708 1.72672,2.98313c1.06984,0.61232 2.38376,0.60576 3.44672,-0.01344l39.54656,-23.06547l39.54656,23.06547c0.5332,0.31304 1.13488,0.47031 1.73344,0.47031c0.59168,0 1.18352,-0.15072 1.71328,-0.45687c1.06984,-0.61232 1.72672,-1.75161 1.72672,-2.98313v-47.58219l-6.88,4.40078v37.195l-36.10656,-21.06328c-0.5332,-0.31304 -1.13488,-0.47031 -1.73344,-0.47031c-0.59856,0 -1.20024,0.15727 -1.73344,0.47031l-36.10656,21.06328v-141.9336h75.68v31.66547l1.18922,-3.1175l1.04141,-1.0414c0.7568,-0.7568 2.40977,-2.17032 4.65609,-3.02344v-27.92313c0,-1.89888 -1.53768,-3.44 -3.44,-3.44zM134.375,44.41094c-1.376,0 -2.752,1.032 -3.44,1.72l-8.25735,21.67469l-23.04531,1.37734c-1.376,0 -2.75335,1.02931 -3.09735,2.40531c-0.344,1.376 0.00135,3.09465 1.37735,3.78265l17.54265,14.45203l-5.85203,22.36c-0.344,1.376 0.34535,3.09465 1.37735,3.78266c0.688,0.344 1.37465,0.68531 2.06265,0.68531c0.69144,0 1.38482,-0.34131 2.06938,-0.68531l19.26265,-12.38266l19.26265,12.72531c1.032,1.032 2.75066,0.688 3.78266,0c1.376,-1.032 1.72134,-2.40666 1.37734,-3.78265l-5.84531,-22.36l17.88531,-14.44531c1.032,-1.032 1.37869,-2.41338 1.03469,-3.78938c-0.344,-1.376 -1.72135,-2.40531 -3.09735,-2.40531l-23.05203,-1.37735l-8.25062,-21.66797c-0.344,-1.032 -1.72135,-2.06938 -3.09735,-2.06938zM134.375,57.48563l5.50265,15.48c0.688,1.032 1.72135,2.06265 3.09735,2.06265l16.51469,1.03469l-12.73203,10.32c-1.032,0.688 -1.37197,2.064 -1.02797,3.44l4.12531,15.82266l-13.76,-8.94266c-0.344,-0.344 -1.032,-0.69203 -1.72,-0.69203c-0.69144,0 -1.37465,0.34938 -2.06265,0.34938l-13.76,8.94265l4.12531,-15.82265c0.344,-1.032 0.00403,-2.752 -1.02797,-3.44l-12.73203,-10.32l16.51469,-0.69203c1.376,-0.344 2.40934,-1.02931 3.09734,-2.40531z"></path></g></g></svg>
                </button>
                <button type="button" onClick={() => dispatch(deletePost(item.id))}>
                    <img className={styles.icon} alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTcyLjI0LDYuODhjLTUuNjYwMzcsMCAtMTAuMzIsNC42NTk2NCAtMTAuMzIsMTAuMzJ2Ni44OGgtMjYuOTg5MjJjLTAuMTkzMTUsLTAuMDMyMjggLTAuMzg4NywtMC4wNDgwMiAtMC41ODQ1MywtMC4wNDcwM2MtMC4xNjY2NSwwLjAwMzYxIC0wLjMzMjgyLDAuMDE5MzMgLTAuNDk3MTksMC4wNDcwM2gtNi4zMjkwNmMtMS4yNDA1OSwtMC4wMTc1NCAtMi4zOTQ1MiwwLjYzNDI1IC0zLjAxOTkzLDEuNzA1OGMtMC42MjU0MSwxLjA3MTU1IC0wLjYyNTQxLDIuMzk2ODQgMCwzLjQ2ODM5YzAuNjI1NDEsMS4wNzE1NSAxLjc3OTM1LDEuNzIzMzUgMy4wMTk5MywxLjcwNThoMy40NHYxMjMuODRjMCw1LjY2MDM3IDQuNjU5NjMsMTAuMzIgMTAuMzIsMTAuMzJoODkuNDRjNS42NjAzNywwIDEwLjMyLC00LjY1OTYzIDEwLjMyLC0xMC4zMnYtMTIzLjg0aDMuNDRjMS4yNDA1OSwwLjAxNzU0IDIuMzk0NTIsLTAuNjM0MjUgMy4wMTk5MywtMS43MDU4YzAuNjI1NDEsLTEuMDcxNTUgMC42MjU0MSwtMi4zOTY4NCAwLC0zLjQ2ODM5Yy0wLjYyNTQxLC0xLjA3MTU1IC0xLjc3OTM1LC0xLjcyMzM1IC0zLjAxOTkzLC0xLjcwNThoLTYuMzAyMTljLTAuMzcxNDksLTAuMDYxNCAtMC43NTA1NCwtMC4wNjE0IC0xLjEyMjAzLDBoLTI2Ljk3NTc4di02Ljg4YzAsLTUuNjYwMzYgLTQuNjU5NjMsLTEwLjMyIC0xMC4zMiwtMTAuMzJ6TTcyLjI0LDEzLjc2aDI3LjUyYzEuOTA3NjMsMCAzLjQ0LDEuNTMyMzYgMy40NCwzLjQ0djYuODhoLTM0LjR2LTYuODhjMCwtMS45MDc2NCAxLjUzMjM3LC0zLjQ0IDMuNDQsLTMuNDR6TTM3Ljg0LDMwLjk2aDI2Ljk0MjE5YzAuMzcxNDksMC4wNjE0IDAuNzUwNTQsMC4wNjE0IDEuMTIyMDMsMGg0MC4xNTc5N2MwLjM3MTQ5LDAuMDYxNCAwLjc1MDU0LDAuMDYxNCAxLjEyMjAzLDBoMjYuOTc1Nzh2MTIzLjg0YzAsMS45MDc2MyAtMS41MzIzNywzLjQ0IC0zLjQ0LDMuNDRoLTg5LjQ0Yy0xLjkwNzYzLDAgLTMuNDQsLTEuNTMyMzcgLTMuNDQsLTMuNDR6TTY1LjMwNjI1LDQ4LjExMjk3Yy0xLjg5NzIyLDAuMDI5NjYgLTMuNDEyMjMsMS41ODk3NiAtMy4zODYyNSwzLjQ4NzAzdjg2Yy0wLjAxNzU0LDEuMjQwNTkgMC42MzQyNSwyLjM5NDUyIDEuNzA1OCwzLjAxOTkzYzEuMDcxNTUsMC42MjU0MSAyLjM5Njg0LDAuNjI1NDEgMy40NjgzOSwwYzEuMDcxNTUsLTAuNjI1NDEgMS43MjMzNSwtMS43NzkzNSAxLjcwNTgsLTMuMDE5OTN2LTg2YzAuMDEyNzMsLTAuOTI5ODMgLTAuMzUxNDksLTEuODI1MjIgLTEuMDA5NjcsLTIuNDgyMTRjLTAuNjU4MTksLTAuNjU2OTIgLTEuNTU0MjcsLTEuMDE5NDIgLTIuNDg0MDgsLTEuMDA0ODl6TTg1Ljk0NjI1LDQ4LjExMjk3Yy0xLjg5NzIyLDAuMDI5NjYgLTMuNDEyMjMsMS41ODk3NiAtMy4zODYyNSwzLjQ4NzAzdjg2Yy0wLjAxNzU0LDEuMjQwNTkgMC42MzQyNSwyLjM5NDUyIDEuNzA1OCwzLjAxOTkzYzEuMDcxNTUsMC42MjU0MSAyLjM5Njg0LDAuNjI1NDEgMy40NjgzOSwwYzEuMDcxNTUsLTAuNjI1NDEgMS43MjMzNSwtMS43NzkzNSAxLjcwNTgsLTMuMDE5OTN2LTg2YzAuMDEyNzMsLTAuOTI5ODMgLTAuMzUxNDksLTEuODI1MjIgLTEuMDA5NjcsLTIuNDgyMTRjLTAuNjU4MTksLTAuNjU2OTIgLTEuNTU0MjcsLTEuMDE5NDIgLTIuNDg0MDgsLTEuMDA0ODl6TTEwNi41ODYyNSw0OC4xMTI5N2MtMS44OTcyMiwwLjAyOTY2IC0zLjQxMjIzLDEuNTg5NzYgLTMuMzg2MjUsMy40ODcwM3Y4NmMtMC4wMTc1NCwxLjI0MDU5IDAuNjM0MjUsMi4zOTQ1MiAxLjcwNTgsMy4wMTk5M2MxLjA3MTU1LDAuNjI1NDEgMi4zOTY4NCwwLjYyNTQxIDMuNDY4MzksMGMxLjA3MTU1LC0wLjYyNTQxIDEuNzIzMzUsLTEuNzc5MzUgMS43MDU4LC0zLjAxOTkzdi04NmMwLjAxMjczLC0wLjkyOTgzIC0wLjM1MTQ5LC0xLjgyNTIyIC0xLjAwOTY3LC0yLjQ4MjE0Yy0wLjY1ODE5LC0wLjY1NjkyIC0xLjU1NDI3LC0xLjAxOTQyIC0yLjQ4NDA4LC0xLjAwNDg5eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"/>
                </button>
            </div>
        </li>
    )
}

Post.defaultProps = {
    isMask: false,
    id: null,
    title: null,
    body: null,
}

Post.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    isMark: PropTypes.bool,
}

export default Post;