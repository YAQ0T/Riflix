import React, { Component } from "react";
import Rent from "./Rent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import MovieDetail from "./MovieDetail";
export default class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      movieIdPressed: null,
      searchInput: "",
      budget: 10000,
      newCatalogData: [],
      catalogData: [
        {
          id: 0,
          isRented: false,
          title: "Tarzan",
          year: 1999,
          img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811",
          descrShort:
            "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out.",
        },
        {
          id: 1,
          isRented: false,
          title: "The Lion King",
          img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg",
          year: 1994,
          descrShort:
            "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies.",
        },
        {
          id: 2,
          isRented: false,
          title: "Beauty and the Beast",
          year: 1991,
          img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg",
          descrShort:
            "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself.",
        },
        {
          id: 3,
          isRented: false,
          title: "The Sword in the Stone",
          year: 1963,
          img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg",
          descrShort:
            "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means.",
        },
        {
          id: 4,
          isRented: false,
          title: "Beauty and the Beast",
          year: 2016,
          img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg",
          descrShort:
            "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation.",
        },
      ],
    };
  }

  rentMovie = (id) => {
    let catalogData = [...this.state.catalogData];
    let budget = this.state.budget;

    catalogData.map((m) => {
      if (m.id == id) {
        if (!m.isRented) {
          budget -= 1000;
          m.isRented = true;
        } else {
          budget += 1000;
          m.isRented = false;
        }
      }
    });
    this.setState({ budget: budget });

    this.setState({ catalogData: catalogData });
  };
  searchPress = (e) => {
    let input = e.target.value;
    this.setState({ searchInput: input });
    let newCatalog = [...this.state.catalogData];
    let searchedMovie = [];
    newCatalog.map((m) => {
      if (m.title.toLowerCase().includes(input)) {
        searchedMovie.push(m);
      }
    });
    this.setState({
      newCatalogData: searchedMovie,
    });
  };
  sendState = () => {
    this.props.getState(this.state);
  };
  render() {
    return (
      <div className="catalog">
        <div className="header">
          <div className="title">Catalog</div>
          <div className="budget">{this.state.budget}$</div>
        </div>
        <div className="rentedMovies">
          <h2 style={{ color: "white" }}>Your Movies :</h2>

          <div className="movies">
            {this.state.catalogData.map((m) => {
              return m.isRented ? (
                <div className="moviePlusInfo">
                  <Rent
                    id={m.id}
                    isRented={m.isRented}
                    img={m.img}
                    rentMovie={this.rentMovie}
                  />
                  <Link
                    to="/MovieDetail"
                    state={[
                      m.id.toString(),
                      m.title,
                      m.img,
                      m.year,
                      m.descrShort,
                    ]}
                  >
                    <button className="movieInfo" onClick={this.sendState}>
                      <h3>Info</h3>
                    </button>
                  </Link>
                </div>
              ) : null;
            })}
          </div>
        </div>
        <div className="searchBar">
          <input
            className="search"
            type="text"
            placeholder="Search"
            onChange={this.searchPress}
          ></input>
        </div>
        <div className="movies">
          {this.state.newCatalogData == ""
            ? this.state.catalogData.map((m) => {
                return (
                  <div className="moviePlusInfo">
                    <Rent
                      id={m.id}
                      isRented={m.isRented}
                      img={m.img}
                      rentMovie={this.rentMovie}
                    />

                    <Link
                      to="/MovieDetail"
                      state={[
                        m.id.toString(),
                        m.title,
                        m.img,
                        m.year,
                        m.descrShort,
                      ]}
                    >
                      <button className="movieInfo" id={m.id}>
                        <h3>Info</h3>
                      </button>
                    </Link>
                  </div>
                );
              })
            : this.state.newCatalogData.map((m) => {
                return (
                  <div className="moviePlusInfo">
                    <Rent
                      id={m.id}
                      isRented={m.isRented}
                      img={m.img}
                      rentMovie={this.rentMovie}
                    />
                    <Link
                      to="/MovieDetail"
                      state={[
                        m.id.toString(),
                        m.title,
                        m.img,
                        m.year,
                        m.descrShort,
                      ]}
                    >
                      <button className="movieInfo" id={m.id}>
                        <h3>Info</h3>
                      </button>
                    </Link>
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
}
