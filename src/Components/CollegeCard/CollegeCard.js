import React, { Component} from "react";
import "./CollegeCard.css";
import Secondcollege from "../images/college_02.jpg";
// import NumberFromat from "../NumberFormat/NumberFormat";
import Rating from "@material-ui/lab/Rating";
import Chip from "@material-ui/core/Chip";
import { Badge } from "@material-ui/core";



class CollegeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promoted: "PROMOTED",
    };
  }

 toCurrency(number) {
    const formatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumSignificantDigits: 3
    });

    return formatter.format(number);
  }



  render() {
    return (
      <div>
        <div className="college-grid">
          {this.props.college.map((data, index) => {

            return (
              <div className="college-col">
                <div>
                  <img
                    className="college-image"
                    src={Secondcollege}
                    alt=""
                    height="233.2px"
                    width="637.3px"
                  />

                  <Badge
                    badgeContent={data.rating_remarks}
                    style={{ backgroundColor: "#f5a626" }}
                  />
                </div>
                <div className="card-text">
                  <div className="college-chip">
                    <div className="college-tag">
                      <Chip
                        className="chip"
                        label={data.tags[0]}
                        variant="outlined"
                      />
                      <Chip
                        className="chip"
                        label={data.tags[1]}
                        variant="outlined"
                      />
                    </div>
                    <div className="college-tag-text">#{data.ranking}</div>
                  </div>
                  <div className="college-name">
                    <div>
                      <span style={{ fontWeight: 400 }}>
                        {" "}
                        {data.college_name}
                      </span>

                      <Rating
                        className="ratings"
                        name="size-small"
                        defaultValue={data.rating}
                        size="small"
                      />
                    </div>
                    <div className="discount">
                      <span
                        style={{
                          marginRight: "5px",
                          textDecoration: "line-through",
                        }}
                      >
                        {this.toCurrency(data.original_fees)}
                      </span>
                      <div className="discount-fee">{data.discount} </div>
                    </div>
                  </div>
                  <div className="college-add">
                    <div className="add">
                      <span>{data.nearest_place[0]}</span>
                      <span className="place">{data.nearest_place[1]}</span>
                    </div>
                    <div className="fee">
                      <span > {this.toCurrency(data.discounted_fees)}</span>
                    </div>
                  </div>
                  <div className="college-distance">
                    <div> {data.famous_nearest_places} </div>
                    <div className="fee_cycle">
                      <span>{data.fees_cycle}</span>
                    </div>
                  </div>
                  <div className="college-offer">
                    <div className="college-offer-text">
                      <span className="text">{data.offertext}</span>
                    </div>
                    <div className="amneties">
                      <span className="fee-cancel">{data.amenties[0]}</span>{" "}
                      <span>.</span>
                      <span className="wifi">{data.amenties[1]}</span>
                    </div>
                  </div>
                  {data.promoted === true ? (
                    <div className="image-tag">
                      <span> {this.state.promoted} </span>
                    </div>
                  ) : (
                    " "
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CollegeCard;
