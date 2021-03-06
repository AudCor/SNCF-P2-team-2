import React from "react";
import "./posts.css";

const Posts = props => {
  return (
    <div>
      {props.posts.length !== 0 && (
        <div className="border rounded mt-3 border-primary position-formulaire scroll-bar-result w-100 bg-white">
          {props.posts.length > 0 ? (
            props.posts.map((p, index) => {
              return (
                <div
                  key={index}
                  className="p-2 border-bottom text-wrap hover-color-sncf"
                  onClick={() => props.handleClickPlaceAndResetPosts(p)}
                >
                  {p.name}
                </div>
              );
            })
          ) : (
            <div>Chargement...</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Posts;
