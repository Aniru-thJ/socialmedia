import "./rightbar.scss";


export const Rightbar = () => {

  
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions for You!</span>
          <div className="user">
            <div className="userinfo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuXUY2uf25DrFjcRt3w6_y8aV0QUnW40EeA&s" alt="madonna"></img>
              <p>Madonna Sebestian</p>
            </div>
            <div className="buttons">
            <button style={{backgroundColor:'blue', border:'none', color:'white',padding:'5px' ,cursor:'pointer'}}>Follow</button>
            <button style={{backgroundColor:'red', border:'none', color:'white',padding:'5px',cursor:'pointer'}}>Remove</button>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.filmibeat.com/img/popcorn/profile_photos/aishwarya-lekshmi-20230502171335-38888.jpg" alt="madonna"></img>
              <p>Aishwarya Lekshmi</p>
            </div>
            <div className="buttons">
            <button style={{backgroundColor:'blue', border:'none', color:'white' ,padding:'5px',cursor:'pointer'}}>Follow</button>
            <button style={{backgroundColor:'red', border:'none', color:'white',padding:'5px',cursor:'pointer'}}>Remove</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Recent Activities</span>
          <div className="user">
            <div className="userinfo">
              <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgvwOlIhOhwa25kD7q7YGM2bM-nBbtGfo0uFpb14gRQG1FySbUZdMJ57DnXOo1bgkaO7btWSOb86n_wb2IRCUS-iag7DOfoVxFug20Hx4" alt="madonna"></img>
              <p>Anupama</p>
            </div>
            <div className="buttons">
            <p style={{fontSize:"15px"}}>Posted a new reel</p>
            <p style={{fontSize:"10px"}}>2 mins ago</p>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4UvkBEJ3Cen3hxnvxLfhf5ifT4Uu0LPTBQ&s" alt="madonna"></img>
              <p>Batman</p>
            </div>
            <div className="buttons">
            <p style={{fontSize:"15px"}}>Posted a new post</p>
            <p style={{fontSize:"10px"}}>16 mins ago</p>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="data:image/jpeg;base64,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" alt="madonna"></img>
              <p>Simbhu</p>
            </div>
            <div className="buttons">
            <p style={{fontSize:"15px"}}>Started following you</p>
            <p style={{fontSize:"10px"}}>20 mins ago</p>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzMDShqZ4v6_HL7ll-CRv_E8I-cJ-6R0W8w&s" alt="madonna"></img>
              <p>MeganFox</p>
            </div>
            <div className="buttons">
            <p style={{fontSize:"15px"}}>Posted a new reel</p>
            <p style={{fontSize:"10px"}}>22 mins ago</p>
            </div>
          </div>
        </div>
        <div style={{gap:'10px'}} className="item">
          <span>Your Friends</span>
          <div className="user">
            <div className="userinfo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-MlOaFAPchB5u5zhZ2axV2c0B3TV1sDKJQ&s" alt="madonna"></img>
              <div className="online">
              </div>
              <p>Abishek Jawahar</p>
              {/* <button style={{backgroundColor:'green', border:'none', color:'black',padding:'5px',cursor:'pointer'}}>Message</button> */}
            </div>
            {/* <div className="buttons">
            <button style={{backgroundColor:'yellow', border:'none', color:'black',padding:'5px' ,cursor:'pointer'}}>Follow</button>
            <button style={{backgroundColor:'red', border:'none', color:'black',padding:'5px',cursor:'pointer'}}>Remove</button>
            </div> */}
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdzmkeQ4_cnvUVJeeWoZYLFdUX3DnhuI4k4w&s" alt="madonna"></img>
              <div className="online">
              </div>
              <p>SenSantose</p>
            </div>
            {/* <div className="buttons">
            <button style={{backgroundColor:'yellow', border:'none', color:'black',padding:'5px' ,cursor:'pointer'}}>Follow</button>
            <button style={{backgroundColor:'red', border:'none', color:'black',padding:'5px',cursor:'pointer'}}>Remove</button>
            </div> */}
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="madonna"></img>
              <div className="online">
              </div>
              <p>LolA</p>
            </div>
            {/* <div className="buttons">
            <button style={{backgroundColor:'yellow', border:'none', color:'black',padding:'5px' ,cursor:'pointer'}}>Follow</button>
            <button style={{backgroundColor:'red', border:'none', color:'black',padding:'5px',cursor:'pointer'}}>Remove</button>
            </div> */}
          </div><div  className="user">
            <div style={{gap:'5px'}} className="userinfo">
              <img src="https://static.moviecrow.com/gallery/20250220/242653-NEEK%202%20Dhanush%20Nilavuku%20En%20Mel%20Ennadi%20Kobam%20Part%202%20.jpg" alt="madonna"></img>
              <div className="online">
              </div>
              <p>MuthuPandi</p>
            </div>
            {/* <div className="buttons">
            <button style={{backgroundColor:'yellow', border:'none', color:'black',padding:'5px' ,cursor:'pointer'}}>Follow</button>
            <button style={{backgroundColor:'red', border:'none', color:'black',padding:'5px',cursor:'pointer'}}>Remove</button>
            </div> */}
          </div>
          <div  className="user">
            <div style={{gap:'5px'}} className="userinfo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" alt="madonna"></img>
              <div className="online">
              </div>
              <p>Ashwin</p>
            </div>
            {/* <div className="buttons">
            <button style={{backgroundColor:'yellow', border:'none', color:'black',padding:'5px' ,cursor:'pointer'}}>Follow</button>
            <button style={{backgroundColor:'red', border:'none', color:'black',padding:'5px',cursor:'pointer'}}>Remove</button>
            </div> */}
          </div>
        </div>
      </div></div>
  )
}
