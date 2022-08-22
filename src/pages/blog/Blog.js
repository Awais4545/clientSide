import React from 'react'
import blogCard1 from "../../assets/blogCard1.png"
import blogCard2 from "../../assets/blogCard2.png"
import blogcard3 from "../../assets/blogcard3.png"
import blogcard4 from "../../assets/blogcard4.png"
import card5 from "../../assets/card5.png"


function Blog() {
  return (
    <div id='blog'>


      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12 col-lg-4 col-md-4 mt-5  ">
            <h5> Our Blog</h5>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-3 col-lg-3">


            <div className="card mt-2" >
              <img src={blogCard1} className="card-img-top" alt="card2" />
              <div className="card-body">
                <div >
                  <p className='fw-bold'>Most Satisfying Cake decorating Cake ideas </p>
                  <p style={{ fontSize: 12 }}>Quis hendrerit nibh mauris sed faucibus.
                    Quis hendrerit nibh mauris sed faucibus.</p>
                </div>


              </div>
            </div>
            <div className="card mt-2" >
              <img src={blogCard2} className="card-img-top" alt="card2" />
              <div className="card-body">
                <div >
                  <p className='fw-bold'>Most Satisfying Cake decorating Cake ideas </p>
                  <p style={{ fontSize: 12 }}>Quis hendrerit nibh mauris sed faucibus.
                    Quis hendrerit nibh mauris sed faucibus.</p>
                </div>


              </div>
            </div>


          </div>
          <div className='col-sm-12 col-md-6 col-lg-6'>
            <div className="card mt-2" >
              <img src={blogcard3} className="card-img-top" alt="card2" />
              <div className="card-body">
                <div >
                  <p className='fw-bold'>Most Satisfying Cake decorating Cake ideas </p>
                  <p style={{ fontSize: 12 }}>Quis hendrerit nibh mauris sed faucibus.
                    Quis hendrerit nibh mauris sed faucibus.</p>
                </div>


              </div>
            </div>

          </div>

          <div className="col-sm-12 col-md-3 col-lg-3">


            <div className="card mt-2" >
              <img src={blogcard4} className="card-img-top" alt="card2" />
              <div className="card-body">
                <div >
                  <p className='fw-bold'>Most Satisfying Cake decorating Cake ideas </p>
                  <p style={{ fontSize: 12 }}>Quis hendrerit nibh mauris sed faucibus.
                    Quis hendrerit nibh mauris sed faucibus.</p>
                </div>


              </div>
            </div>
            <div className="card mt-2" >
              <img src={card5} className="card-img-top" alt="card2" />
              <div className="card-body">
                <div >
                  <p className='fw-bold'>Most Satisfying Cake decorating Cake ideas </p>
                  <p style={{ fontSize: 12 }}>Quis hendrerit nibh mauris sed faucibus.
                    Quis hendrerit nibh mauris sed faucibus.</p>
                </div>


              </div>
            </div>


          </div>

        </div>
      </div>




    </div>
  )
}
export default Blog
