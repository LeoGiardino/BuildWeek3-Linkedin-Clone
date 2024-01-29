import React, { useEffect } from 'react';
import '../../styles/HomeStyle/CorpoPostsComp.css';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../redux/actions/post';
import { getListaProfili } from '../../redux/actions/getListaProfili';

export default function CorpoPostsComp() {
  const posts = useSelector((state) => state?.post.post);
  const profili = useSelector((state) => state?.listaProfili?.listaProfili);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getListaProfili());
  }, []);

  console.log(profili);

  return (
    <>
      {posts && 
        posts.slice(0, 100).map((post) =>  (
          post.image && (

          <div key={post._id} className="compBackground pageWhtTxt mb-2" style={{ width: '100%', borderRadius: '10px' }}>
            <div className="d-flex p-3">
              <div className="me-3">
                <img className="rounded-circle" src="https://media.licdn.com/dms/image/C4D0BAQGZyFrbDqG6mA/company-logo_100_100/0/1630472646377/bitsoftwaresolution_logo?e=1714608000&v=beta&t=VvajNjrpFPhkEEF1hFCHk8Vzt5bVyYQkAeDq_WlGAcQ" alt="" />
              </div>
              <div className="d-flex flex-column">
                {profili?.map((profilo) => profilo._id === post.user._id  && 
                  <>
                <p>{profilo?.name + ' ' + profilo?.surname}</p>
                <span>{profilo?.title}</span>
                <span>{post.createdAt}</span>
                </>
                )}


            
                
              </div>
            </div>
            <div className="descrizione px-3">
              <p>{post.text}</p>
            </div>
            <div className="bigImage" style={{ maxWidth: '100%' }}>
              <img style={{ width: '100%' }} src={post.image} alt="" />
            </div>
            <div style={{ borderTop: '1px solid gray' }} className="d-flex justify-content-between p-3 mt-2">
              <div className="d-flex align-items-center">
                <i className="bi bi-hand-thumbs-up iconPost"></i>
                <span className="fw-bold ms-2">Consiglia</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-chat-text iconPost"></i>
                <span className="fw-bold ms-2">Commenta</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-arrow-repeat iconPost"></i>
                <span className="fw-bold ms-2">Diffondi il post</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-send-fill iconPost"></i>
                <span className="fw-bold ms-2">Invia</span>
              </div>
            </div>
          </div>
          )
        ))}
    </>
  );
}
