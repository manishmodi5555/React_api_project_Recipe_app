import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default function RecipeDetails() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

function Content() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [tag, setTag] = useState([]);
  const [tagData, setTagData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = () => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((a) => {
        setData(a);
        setLoading(false);
        setTag(a.tags[0]);
      });
  };

  const fetchTagrecipe = () => {
    console.log(tag);
    fetch(`https://dummyjson.com/recipes/tag/${tag}`)
      .then((res) => res.json())
      .then((a) => setTagData(a.recipes));
  };

 useEffect(() => {
   fetchData();
   fetchTagrecipe();
 }, [tag]);

  return (
    <>
      {loading ? (
        <p>loading...........</p>
      ) : (
        <div>
          <div className="uk-container">
            <div data-uk-grid>
              <div className="uk-width-1-2@s">
                <div>
                  <img
                    className="uk-border-rounded-large"
                    src={data.image}
                    alt="Image alt"
                  />
                </div>
              </div>
              <div className="uk-width-expand@s uk-flex uk-flex-middle">
                <div>
                  <h1>{data.name}</h1>
                  <ul>
                    {data.ingredients.map((value) => (
                      <li>{value}</li>
                    ))}
                  </ul>
                  <div
                    className="uk-margin-medium-top uk-child-width-expand uk-text-center uk-grid-divider"
                    data-uk-grid
                  >
                    <div>
                      <span data-uk-icon="icon: clock; ratio: 1.4" />
                      <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">
                        Cooking Time
                      </h5>
                      <span className="uk-text-small">
                        {data.cookTimeMinutes} mins
                      </span>
                    </div>
                    <div>
                      <span data-uk-icon="icon: future; ratio: 1.4" />
                      <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">
                        Total Time
                      </h5>
                      <span className="uk-text-small">
                        {data.prepTimeMinutes} mins
                      </span>
                    </div>
                    <div>
                      <span data-uk-icon="icon: users; ratio: 1.4" />
                      <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">
                        Yield
                      </h5>
                      <span className="uk-text-small">
                        Serves {data.servings}
                      </span>
                    </div>
                  </div>
                  <hr />
                  <div data-uk-grid>
                    <div className="uk-width-auto@s uk-text-small">
                      <p className="uk-margin-small-top uk-margin-remove-bottom">
                        Created by <a href="#">Alex Williamns</a>
                      </p>
                      <span className="uk-text-muted">21 recipes</span>
                    </div>
                    <div className="uk-width-expand@s uk-flex uk-flex-middle uk-flex-right@s">
                      <a
                        href="#"
                        className="uk-icon-link"
                        data-uk-icon="icon: plus-circle; ratio: 1.2"
                        data-uk-tooltip="title: Save Recipe"
                      />
                      <a
                        href="#"
                        className="uk-icon-link uk-margin-left"
                        data-uk-icon="icon: cart; ratio: 1.2"
                        data-uk-tooltip="title: Shopping List"
                      />
                      <a
                        href="#"
                        className="uk-icon-link uk-margin-left"
                        data-uk-icon="icon: print; ratio: 1.2"
                        data-uk-tooltip="title: Print Recipe"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="uk-section uk-section-default">
            <div className="uk-container uk-container-small">
              <div className="uk-grid-large" data-uk-grid>
                <div className="uk-width-expand@m">
                  <div className="uk-article">
                    <h3>How to Make It</h3>
                    {data.instructions.map((ele, index) => (
                      <div
                        id="step-1"
                        className="uk-grid-small uk-margin-medium-top"
                        data-uk-grid
                      >
                        <div className="uk-width-auto">
                          <a
                            href="#"
                            className="uk-step-icon"
                            data-uk-icon="icon: check; ratio: 0.8"
                            data-uk-toggle="target: #step-1; cls: uk-step-active"
                          />
                        </div>
                        <div className="uk-width-expand">
                          <h5
                            className="uk-step-title uk-text-500 uk-text-uppercase uk-text-primary"
                            data-uk-leader="fill:—"
                          >
                            {index + 1}. Step
                          </h5>
                          <div className="uk-step-content">{ele}</div>
                        </div>
                      </div>
                    ))}

                    <hr className="uk-margin-medium-top uk-margin-large-bottom" />
                  </div>
                </div>
              </div>
            </div>
            <div className="uk-section uk-section-muted">
              <div className="uk-container">
                <h3>Other Recipes You May Like</h3>
                <div
                  className="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-margin-medium-top"
                  data-uk-grid
                >
                  {tagData ? (
                    tagData.map((ele) => (
                      <div>
                        <div className="uk-card">
                          <div className="uk-card-media-top uk-inline uk-light">
                            <img
                              className="uk-border-rounded-medium"
                              src="https://source.unsplash.com/-YHSwy6uqvk/300x160"
                              alt="Course Title"
                            />
                            <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                            <div className="uk-position-xsmall uk-position-top-right">
                              <a
                                href="#"
                                className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                                data-uk-icon="heart"
                              />
                            </div>
                          </div>
                          <div>
                            <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                              Chef John's Turkey Sloppy Joes
                            </h3>
                            <div
                              className="uk-text-xsmall uk-text-muted"
                              data-uk-grid
                            >
                              <div className="uk-width-auto uk-flex uk-flex-middle">
                                <span
                                  className="uk-rating-filled"
                                  data-uk-icon="icon: star; ratio: 0.7"
                                />
                                <span className="uk-margin-xsmall-left">
                                  5.0
                                </span>
                                <span>(73)</span>
                              </div>
                              <div className="uk-width-expand uk-text-right">
                                by John Keller
                              </div>
                            </div>
                          </div>
                          <a href="recipe.html" className="uk-position-cover" />
                        </div>
                      </div>
                    ))
                  ) : (
                    <h3>No tag data </h3>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
