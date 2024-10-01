"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

const Webinar: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <section className="webinar-area">
        <div className="row m-0">
          <div className="col-lg-6 p-0">
            <div className="webinar-content">
              <h2>Hãy xem thông tin mới nhất từ chúng tôi</h2>
              <p>
              Phát triển từ một cửa hàng nhỏ thành địa chỉ tin cậy cho tín đồ thời trang. 
              Giờ đây, với  hội thảo "Định hình phong cách cá nhân", 
              thu hút sự quan tâm của khách hàng và chuyên gia trong ngành. 
              Sự kiện tạo cơ hội giao lưu và chia sẻ kiến thức về xu hướng thời trang. Đánh dấu một cột mốc quan trọng 
              trong sự phát triển về sau. 
              </p>

              <Link href="#" className="btn btn-primary">
                Xem thêm
              </Link>
            </div>
          </div>

          <div className="col-lg-6 p-0">
            <div
              className="webinar-video-image"
              style={{
                backgroundImage: `url(/images/woman.jpg)`,
              }}
            >
              <Image
                src="/images/woman.jpg"
                alt="image"
                width={532}
                height={398}
              />

              <div
                onClick={() => setToggler(!toggler)}
                className="video-btn popup-youtube"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <i className="flaticon-play-button"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Webinar;
