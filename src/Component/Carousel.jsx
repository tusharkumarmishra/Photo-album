import React, { useState } from "react";
import Radium from "radium";

export default Radium(function Carousel({ album }) {

    const style = {
        carousel: {
            "margin": "20px 5px",
            "borderRadius": "0.5rem",
            "minWidth": "300px",
            "cursor": "pointer",
            "boxShadow": "0 0 10px 2.5px gray",
            "transition": "all 0.25s ease-in-out",

            ':hover': {
                "boxShadow": "0 0 10px 5px #555",
                "transform": "scale(1.05)"
            }
        },

        H5: {
            "textDecoration": "line-through",
        },

        P: {
            "textDecoration": "line-through",
        }
    }

    const [albumData, setAlbumData] = useState(album);
    const [deleteAlbum, setDeleteAlbum] = useState([]);
    const [albumBody, setAlbumBody] = useState("");

    async function onDeleteHandler(deleteId) {
        console.log(deleteId);
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1${deleteId}`, {
            method: 'DELETE',
        });
        const responseJSON = await response.json();
        if (responseJSON) {
            console.log("Dummy Deleted ");
            console.log(responseJSON);
            const tempArray = [...deleteAlbum, deleteId]
            setDeleteAlbum(tempArray);
        }
    }

    async function onSubmitHandler(event) {
        event.preventDefault();
        const albumId = event.target[0].value;
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${albumId}`, {
            method: 'PUT',
            body: JSON.stringify({
                body: albumBody,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const responseJSON = await response.json();
        console.log(responseJSON);
        const modifiedData = albumData.map(element => {
            if (element.id === responseJSON.id) {
                return ({ ...element, title: albumBody })
            }
            else {
                return element;
            }
        });
        setAlbumData(modifiedData);
        setAlbumBody('')
    }

    return (
        <React.Fragment>
            <div
                id={`carouselExampleDark_${albumData[0].userId}`}
                className="carousel carousel-dark slide w-25"
                data-bs-ride="carousel"
                style={style.carousel}
            >

                <div className="carousel-indicators">
                    <button type="button" data-bs-target={`#carouselExampleDark_${albumData[0].userId}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target={`#carouselExampleDark_${albumData[0].userId}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target={`#carouselExampleDark_${albumData[0].userId}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target={`#carouselExampleDark_${albumData[0].userId}`} data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target={`#carouselExampleDark_${albumData[0].userId}`} data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target={`#carouselExampleDark_${albumData[0].userId}`} data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target={`#carouselExampleDark_${albumData[0].userId}`} data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target={`#carouselExampleDark_${albumData[0].userId}`} data-bs-slide-to="7" aria-label="Slide 8"></button>
                    <button type="button" data-bs-target={`#carouselExampleDark_${albumData[0].userId}`} data-bs-slide-to="8" aria-label="Slide 9"></button>
                    <button type="button" data-bs-target={`#carouselExampleDark_${albumData[0].userId}`} data-bs-slide-to="9" aria-label="Slide 10"></button>
                </div>


                <div className="carousel-inner" style={{ "borderRadius": "0.75rem" }}>
                    {
                        albumData.map((item) => {
                            return (
                                <React.Fragment>
                                    {
                                        (
                                            (item.id === 1) || (item.id === 11) || (item.id === 21) || (item.id === 31) || (item.id === 41) ||
                                            (item.id === 51) || (item.id === 61) || (item.id === 71) || (item.id === 81) || (item.id === 91)
                                        ) ?
                                            <div key={item.id} className="carousel-item active" data-bs-interval="5000" >

                                                {item.id === 1 && < img height={"350px"} width={"500px"} src="https://e7.pngegg.com/pngimages/510/841/png-transparent-abstract-blue-background-wave.png" alt="..." />}
                                                {item.id === 11 && < img height={"350px"} width={"500px"} src="https://m.media-amazon.com/images/I/71+17bVYHxL._AC_UF1000,1000_QL80_.jpg" alt="..." />}
                                                {item.id === 21 && < img height={"350px"} width={"500px"} src="https://png.pngtree.com/background/20210717/original/pngtree-hand-painted-blue-flower-bud-golden-border-wedding-watercolor-rose-background-picture-image_1444815.jpg" alt="..." />}
                                                {item.id === 31 && < img height={"350px"} width={"500px"} src="https://ashisheditz.com/wp-content/uploads/2023/05/photo-editing-background-4k-download-scaled.jpg" alt="..." />}
                                                {item.id === 41 && < img height={"350px"} width={"500px"} src="https://www.whoa.in/download/beautiful-natural-sunrise-with-orange-background-hd-wallpaper" alt="..." />}
                                                {item.id === 51 && < img height={"350px"} width={"500px"} src="https://images.pexels.com/photos/304664/pexels-photo-304664.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..." />}
                                                {item.id === 61 && < img height={"350px"} width={"500px"} src="https://burst.shopifycdn.com/photos/beach-at-sunset-in-teal-and-orange.jpg?width=1000&format=pjpg&exif=0&iptc=0" alt="..." />}
                                                {item.id === 71 && < img height={"350px"} width={"500px"} src="https://www.hdwallpapers.in/download/green_leaves_in_blur_green_background_hd_nature-HD.jpg" alt="..." />}
                                                {item.id === 81 && < img height={"350px"} width={"500px"} src="https://i.pinimg.com/736x/cb/6e/d3/cb6ed38bc47dee4823a1f4acd14c891c.jpg" alt="..." />}
                                                {item.id === 91 && < img height={"350px"} width={"500px"} src="https://www.imageshine.in/uploads/sub_category/HD-Purple-Background-Images-and-Wallpaper-Free-download.jpg" alt="..." />}

                                                <div className="carousel-caption d-md-block" style={{ "backgroundColor": "rgba(240,248,255,0.9)", "borderRadius": "0.5rem", "padding": "10px" }}>
                                                    <h5 className="display-6">Album {item.userId}</h5>

                                                    {
                                                        deleteAlbum.includes(item.id) &&
                                                        <React.Fragment>
                                                            <h5 style={style.H5}>Title {item.id}</h5>
                                                            <p style={style.P}>{item.title}</p>
                                                        </React.Fragment>
                                                    }
                                                    {
                                                        !deleteAlbum.includes(item.id) &&
                                                        <React.Fragment>
                                                            <h5>Title {item.id}</h5>
                                                            <p>{item.title}</p>
                                                        </React.Fragment>
                                                    }

                                                    <div className="d-flex flex-row justify-content-evenly w-100 py-3" style={{ "position": "relative" }}>
                                                        <button onClick={() => { onDeleteHandler(item.id) }} type="button" className="btn btn-outline-danger"><i className="fa-solid fa-trash"></i></button>
                                                        <button type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample_${item.id}`} className="btn btn-outline-dark"><i className="bi bi-images"></i> &nbsp;Modify</button>

                                                        <div className="collapse" id={`collapseExample_${item.id}`} style={{ "position": "absolute", "top": "-175%", "zIndex": "5" }}>
                                                            <div className="card card-body" style={{ "width": "100%" }}>
                                                                <form onSubmit={onSubmitHandler}>
                                                                    <input type="text" value={item.id} hidden />
                                                                    <div className="mb-3">
                                                                        <label htmlFor="formGroupExampleInput3" className="form-label">Enter Body</label>
                                                                        <input onChange={(e) => { setAlbumBody(e.target.value) }} type="text" className="form-control" id="formGroupExampleInput3" value={albumBody} placeholder="Enter Body" required></input>
                                                                    </div>
                                                                    <div className="modal-footer d-flex flex-row justify-content-evenly ">
                                                                        <button type="submit" data-bs-toggle="collapse" data-bs-target={`#collapseExample_${item.id}`} className="btn btn-success" data-bs-dismiss="modal"><i className="fa-solid fa-square-check"></i></button>
                                                                        <button type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample_${item.id}`} className="btn btn-danger" data-bs-dismiss="modal"><i className="fa-solid fa-rectangle-xmark"></i></button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div key={item.id} className="carousel-item" data-bs-interval="5000">

                                                {(item.id > 1 && item.id < 11) && < img height={"350px"} width={"500px"} src="https://e7.pngegg.com/pngimages/510/841/png-transparent-abstract-blue-background-wave.png" alt="..." />}
                                                {(item.id > 11 && item.id < 21) && < img height={"350px"} width={"500px"} src="https://m.media-amazon.com/images/I/71+17bVYHxL._AC_UF1000,1000_QL80_.jpg" alt="..." />}
                                                {(item.id > 21 && item.id < 31) && < img height={"350px"} width={"500px"} src="https://png.pngtree.com/background/20210717/original/pngtree-hand-painted-blue-flower-bud-golden-border-wedding-watercolor-rose-background-picture-image_1444815.jpg" alt="..." />}
                                                {(item.id > 31 && item.id < 41) && < img height={"350px"} width={"500px"} src="https://ashisheditz.com/wp-content/uploads/2023/05/photo-editing-background-4k-download-scaled.jpg" alt="..." />}
                                                {(item.id > 41 && item.id < 51) && < img height={"350px"} width={"500px"} src="https://www.whoa.in/download/beautiful-natural-sunrise-with-orange-background-hd-wallpaper" alt="..." />}
                                                {(item.id > 51 && item.id < 61) && < img height={"350px"} width={"500px"} src="https://images.pexels.com/photos/304664/pexels-photo-304664.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..." />}
                                                {(item.id > 61 && item.id < 71) && < img height={"350px"} width={"500px"} src="https://burst.shopifycdn.com/photos/beach-at-sunset-in-teal-and-orange.jpg?width=1000&format=pjpg&exif=0&iptc=0" alt="..." />}
                                                {(item.id > 71 && item.id < 81) && < img height={"350px"} width={"500px"} src="https://www.hdwallpapers.in/download/green_leaves_in_blur_green_background_hd_nature-HD.jpg" alt="..." />}
                                                {(item.id > 81 && item.id < 91) && < img height={"350px"} width={"500px"} src="https://i.pinimg.com/736x/cb/6e/d3/cb6ed38bc47dee4823a1f4acd14c891c.jpg" alt="..." />}
                                                {(item.id > 91 && item.id < 101) && < img height={"350px"} width={"500px"} src="https://www.imageshine.in/uploads/sub_category/HD-Purple-Background-Images-and-Wallpaper-Free-download.jpg" alt="..." />}

                                                <div className="carousel-caption d-md-block" style={{ "backgroundColor": "rgba(240,248,255,0.9)", "borderRadius": "0.5rem", "padding": "10px" }}>
                                                    <h5 className="display-6">Album {item.userId}</h5>

                                                    {
                                                        deleteAlbum.includes(item.id) &&
                                                        <React.Fragment>
                                                            <h5 style={style.H5}>Title {item.id}</h5>
                                                            <p style={style.P}>{item.title}</p>
                                                        </React.Fragment>
                                                    }
                                                    {
                                                        !deleteAlbum.includes(item.id) &&
                                                        <React.Fragment>
                                                            <h5>Title {item.id}</h5>
                                                            <p>{item.title}</p>
                                                        </React.Fragment>
                                                    }

                                                    <div className="d-flex flex-row justify-content-evenly w-100 py-3" style={{ "position": "relative" }}>
                                                        <button onClick={() => { onDeleteHandler(item.id) }} type="button" className="btn btn-outline-danger"><i className="fa-solid fa-trash"></i></button>
                                                        <button type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample_${item.id}`} className="btn btn-outline-dark"><i className="bi bi-images"></i>&nbsp;Modify</button>

                                                        <div className="collapse" id={`collapseExample_${item.id}`} style={{ "position": "absolute", "top": "-175%", "zIndex": "5" }}>
                                                            <div className="card card-body" style={{ "width": "100%" }}>
                                                                <form onSubmit={onSubmitHandler}>
                                                                    <input type="text" value={item.id} hidden />
                                                                    <div className="mb-3">
                                                                        <label htmlFor="formGroupExampleInput3" className="form-label">Enter Body</label>
                                                                        <input onChange={(e) => { setAlbumBody(e.target.value) }} type="text" className="form-control" id="formGroupExampleInput3" value={albumBody} placeholder="Enter Body" required></input>
                                                                    </div>
                                                                    <div className="modal-footer d-flex flex-row justify-content-evenly ">
                                                                        <button type="submit" data-bs-toggle="collapse" data-bs-target={`#collapseExample_${item.id}`} className="btn btn-success" data-bs-dismiss="modal"><i className="fa-solid fa-square-check"></i></button>
                                                                        <button type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample_${item.id}`} className="btn btn-danger" data-bs-dismiss="modal"><i className="fa-solid fa-rectangle-xmark"></i></button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                    }
                                </React.Fragment>
                            )
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleDark_${albumData[0].userId}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleDark_${albumData[0].userId}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </React.Fragment>
    )
})