import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Movie() {
    const [bgposter, setBgposter] = useState("");
    const [slug, setSlug] = useState("");
    const [smposter, setSmposter] = useState("");
    const [titlecategory, setTitlecategory] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState([]);
    const [category, setCategory] = useState("");
    const [quality, setQuality] = useState("");
    const [youtubelink, setYoutubelink] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [language, setLanguage] = useState("");
    const [title, setTitle] = useState("");
    const [size, setSize]= useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [duration, setDuration] = useState("");
    const [watchonline, setWatchonline] = useState("");
    const [downloadlink, setDownloadlink] = useState({
        "480p": "",
        "720p": "",
        "1080p": "",
        "4k": "",
    });
    const [showInputs, setShowInputs] = useState({
        "480p": false,
        "720p": false,
        "1080p": false,
        "4k": false,
    });

    const handleInputChange = (resolution, value) => {
        setDownloadlink(prevState => ({
            ...prevState,
            [resolution]: value
        }));
    }

    const toggleInputVisibility = resolution => {
        setShowInputs(prevState => ({
            ...prevState,
            [resolution]: !prevState[resolution]
        }));
    }

    const resolutions = ["480p", "720p", "1080p", "4k"];

    const [status, setStatus] = useState([]);

    // slug fucntion, url for every space will be generate - for every time press space

    const handleSlugChange = () => {
        const inputValue = ev.target.value;
        
        const newSlug = inputValue.replace(/\s+/g,'-');
        setSlug(newSlug);
    }

    // movie categoryes 
    const categories = ["Bollywood", "Hollywood", "South", "Gujarati", "Marvel_studio", "Tv_Shows", "Web_Series"];


    return (
        <>
            <Head>
                <title>Add Movie page</title>
            </Head>
            <form className="addmovieform">
                <div className="formdata w-100 flex flex-sb mt-3 flex-left">

  <div className="w-50 flex flex-col flex-left">
                      {/* movie background image  */}
                      <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="bgposter">Background Poster</label>
                        <input
                            type="text"
                            id="bgposter"
                            placeholder="Bg poster image link"
                            value={bgposter}
                            onChange={(e) => setBgposter(e.target.value)}
                        />
                    </div>
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="title">Movie Title</label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Movie title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            placeholder="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="rating">Rating (out of 5)</label>
                        <input
                            type="number"
                            id="rating"
                            placeholder="Rating (out of 5)"
                            value={rating}
                            onChange={(e) => {
                                let newValue = parseFloat(e.target.value);
                                newValue = newValue <= 10.0 ? newValue : 10.0;
                                newValue = newValue >= 0 ? newValue : 0;
                                setRating(newValue);
                            }}
                            step="0.1"
                            max="10.0"
                            min="0"
                            defaultValue="5"
                        />
                    </div>
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="duration">Duration</label>
                        <input
                            type="text"
                            id="duration"
                            placeholder="Duration"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        />
                    </div>
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="watchonline">Watch Online Link</label>
                        <input
                            type="text"
                            id="watchonline"
                            placeholder="Watch Online Link"
                            value={watchonline}
                            onChange={(e) => setWatchonline(e.target.value)}
                        />
                    </div>
                    {/* download links  */}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="downloadlink">Download link</label>
                        <div className="flex gap-1">
                            {resolutions.map(resolution => (
                                <div key={resolution} className={showInputs[resolution] ? 'dresolbtn active' : 'dresolbtn'} onClick={() => toggleInputVisibility(resolution)}>
                                    {showInputs[resolution] ? `Hide ${resolution}` : `Show ${resolution}`}
                                </div>
                            ))}
                        </div>
                        {resolutions.map(resolution => (
                            <div key={resolution} className="w-100">
                                {showInputs[resolution] && (
                                    <>
                                        <label htmlFor={`downloadlink${resolution}`}>{`${resolution} Download link`}</label>
                                        <input
                                            type="text"
                                            id={`downloadlink${resolution}`}
                                            placeholder={`${resolution} Download link`}
                                            value={downloadlink[resolution]}
                                            onChange={(e) => handleInputChange(resolution, e.target.value)}
                                        />
                                    </>
                                )}
                            </div>
                        ))}
                    </div>

{/* movie status (draft or publish)  */}
<div className="w-100 flex flex-col flex-left mb-2">
    <label htmlFor="status">Status</label>
    <div className="flex gap-05">
        <input type="radio"
        id="draft"
        name="status"
        value="draft"
        checked={status === "draft"}
        onChange={(e) => setStatus(e.target.value)}
        />
        <label htmlFor="draft">Draft</label>
    </div>
    <div className="flex gap-05">
        <input type="radio"
        id="publish"
        name="status"
        value="publish"
        checked={status === "publish"}
        onChange={(e) => setStatus(e.target.value)}
        />
        <label htmlFor="publish">Publish</label>
    </div>
</div>


  </div>

{/* for right side  */}
  <div className="w-50 flex flex-col flex-left">
    {/* movie small poster  */}
    <div className="w-100 flex flex-col flex-left mb-2">
        <label htmlFor="smposter">Main Poster</label>
        <input type="text" id="smposter" placeholder="smposter image link"
        value={smposter}
        onChange={ev => setSmposter(ev.target.value)}/>
    </div>
{/* movie slug url  */}
<div className="w-100 flex flex-col flex-left mb-2">
        <label htmlFor="slug">Slug (url)</label>
        <input type="text" id="slug" placeholder="slug url of movie"
        value={slug}
        onChange={handleSlugChange}/>
    </div>

{/* release year if the movie  */}
<div className="w-100 flex flex-col flex-left mb-2">
        <label htmlFor="year">Release Year</label>
        <input type="text" id="year" placeholder="year"
        value={year}
        onChange={ev => setYear(ev.target.value)}/>
    </div>

{/* youtube embed link   */}
<div className="w-100 flex flex-col flex-left mb-2">
        <label htmlFor="youtubelink">Youtube link</label>
        <input type="text" id="youtubelink" placeholder="Youtube link"
        value={youtubelink}
        onChange={ev => setYoutubelink(ev.target.value)}/>
    </div>

{/* Language of the movie  */}
<div className="w-100 flex flex-col flex-left mb-2">
        <label htmlFor="language">Youtube link</label>
        <select onChange={(e) => setLanguage(e.target.value)}  value={language} name="language" id="language">
            <option value="">Select language</option>
            <option value="Hindi (ORG)">Hindi (ORG)</option>
            <option value="English">English</option>
            <option value="Hindi - English">Hindi - English</option>
            <option value="Dual Audio [Hindi (ORG) + English]">Dual Audio [Hindi (ORG) + English]</option>
            <option value="Dual Audio [Hindi (Cleaned) + English]">Dual Audio [Hindi (Cleaned) + English]</option>
        </select>
    </div>


    {/* quality of the movie  */}
    <div className="w-100 flex flex-col flex-left mb-2">
        <label htmlFor="quality">Quality of movie</label>
        <select onChange={(e) => setQuality(e.target.value)}  value={quality} name="quality" id="quality">
            <option value="">Select Quality</option>
            <option value="480p || 720p || 1080p - WEB-DL">480p || 720p || 1080p - WEB-DL</option>
            <option value="480p || 720p || 1080p || 2160p - WEB-DL">480p || 720p || 1080p - WEB-DL</option><option value="480p || 720p || 1080p - HDTC">480p || 720p || 1080p - HDTC</option>
        </select>
    </div>

    {/* subtitle of the movie */}
    <div className="w-100 flex flex-col flex-left mb-2">
        <label htmlFor="subtitle">Movie Subtitle</label>
        <select onChange={(e) => setSubtitle(e.target.value)}  value={subtitle} name="subtitle" id="subtitle">
            <option value="">Select Subtitle</option>
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
        </select>
    </div>

    {/*  size of the movie */}
    <div className="w-100 flex flex-col flex-left mb-2">
        <label htmlFor="size">Movie size</label>
        <input type="text" id="size" placeholder="350 MB || 1GB || 2GB || 4GB"
        value={size}
        onChange={e => setSize(e.target.value)}/>
    </div>

    {/* movie title category */}
    <div className="moviecategory flex flex-sb flex-left">
    <div className="w-50 flex flex-col flex-left mb-2">
        <label>Title Category</label>
        {['Movies','Series','Shows'].map((cat) => (
            <div key={cat} className="flex items-center gap-0.5">
                <input 
                    type="radio"
                    id={cat.toLowerCase()}
                    name="titlecategory"
                    value={cat.toLowerCase()}
                    checked={titlecategory === cat.toLowerCase()}
                    onChange={(e) => setTitlecategory(e.target.value)}
                />
                <label htmlFor={cat.toLowerCase()}>{cat}</label>
            </div>
        ))}
    </div>
 {/* movie category */}
        <div className="w-50 flex flex-col flex-left mb-2">
        <label>Category</label>
        {
            categories.map((cat) => (
                <div key={cat} className="flex gap-05">
                    <input type="radio"
                    id={cat.toLowerCase()}
                    name="titlecategory"
                    value={cat.toLocaleLowerCase()}
                    checked={titlecategory === cat.toLowerCase()}
                    onChange={(e) => setTitlecategory(e.target.value)}
                    />
                    <label htmlFor={cat.toLowerCase()}>{cat}</label>
                    </div>
            ))
        }
    </div>

{/* movie Genre  */}

<div className="w-50 flex flex-col flex-left mb-2">
    <label>Genre</label>
    {['Action','Adventure','Animation','Comedy','Drama','Crime','Fantasy','Horror','Romance','Thriller','Science_Fiction'].map((genreOption) => (
        <label key={genreOption} className="flex items-center gap-0.5">
            <input 
                type="checkbox"
                value={genreOption.toLowerCase()}
                checked={genre.includes(genreOption.toLowerCase())}
                    onChange={(e) => {
                        const selectedGenre = e.target.value;
                        setGenre((preGenre) => {
                            if(preGenre.includes.filer(selectedGenre)) {
                                return preGenre.filter((genre) => genre !== selectedGenre)
                            }
                            else {
                                return [...preGenre, selectedGenre]
                            }
                        })
                    }}
            />
            <label htmlFor={genreOption.toLowerCase()}>{genreOption}</label>
        </label>
    ))}
</div>

    
    </div>

   
    



  </div>



                </div>
            </form>
        </>
    );
}
