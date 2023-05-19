import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[100vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-md" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-black">
            <div className="text-white space-y-7 sm:w-full md:w-1/2 ps-20">
              <h2 className="text-6xl font-bold">
                Explore the World of Disney Dream Dolls
              </h2>
              <p>
                Discover a captivating range of Disney Dream Dolls that will
                delight collectors and fans of all ages. From Cinderella
                timeless elegance to Ariel captivating spirit, our dolls are
                meticulously designed with attention to detail, ensuring an
                authentic representation of the cherished characters you know
                and love. With their intricately crafted costumes, expressive
                features, and poseable bodies, these dolls are ready to embark
                on new adventures or grace your collection shelves with their
                undeniable charm.
              </p>
              <div>
                <button className="btn btn-primary mr-5">Explore More</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-md" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-black">
                    <div className='text-white space-y-7 sm:w-full md:w-1/2 ps-20'>
                        <h2 className='text-6xl font-bold'>Explore the World of Disney Dream Dolls</h2>
                        <p>Discover a captivating range of Disney Dream Dolls that will delight collectors and fans of all ages. From Cinderella timeless elegance to Ariel captivating spirit, our dolls are meticulously designed with attention to detail, ensuring an authentic representation of the cherished characters you know and love. With their intricately crafted costumes, expressive features, and poseable bodies, these dolls are ready to embark on new adventures or grace your collection shelves with their undeniable charm.</p>
                        <div>
                            <button className="btn btn-primary mr-5">Explore More</button>
                        </div>
                    </div>
                </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-md" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-black">
                    <div className='text-white space-y-7 sm:w-full md:w-1/2 ps-20'>
                        <h2 className='text-6xl font-bold'>Explore the World of Disney Dream Dolls</h2>
                        <p>Discover a captivating range of Disney Dream Dolls that will delight collectors and fans of all ages. From Cinderella timeless elegance to Ariel captivating spirit, our dolls are meticulously designed with attention to detail, ensuring an authentic representation of the cherished characters you know and love. With their intricately crafted costumes, expressive features, and poseable bodies, these dolls are ready to embark on new adventures or grace your collection shelves with their undeniable charm.</p>
                        <div>
                            <button className="btn btn-primary mr-5">Explore More</button>
                        </div>
                    </div>
                </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-md" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-black">
                    <div className='text-white space-y-7 sm:w-full md:w-1/2 ps-20'>
                        <h2 className='text-6xl font-bold'>Explore the World of Disney Dream Dolls</h2>
                        <p>Discover a captivating range of Disney Dream Dolls that will delight collectors and fans of all ages. From Cinderella timeless elegance to Ariel captivating spirit, our dolls are meticulously designed with attention to detail, ensuring an authentic representation of the cherished characters you know and love. With their intricately crafted costumes, expressive features, and poseable bodies, these dolls are ready to embark on new adventures or grace your collection shelves with their undeniable charm.</p>
                        <div>
                            <button className="btn btn-primary mr-5">Explore More</button>
                        </div>
                    </div>
                </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
