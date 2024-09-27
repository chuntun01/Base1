"use client";

import React from "react";
import Image from "next/image";

const ServiceDetailsContent: React.FC = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Mua sắm ở Bariton?</h3>
              <p>
              Trang web bán quần áo của chúng tôi mang đến cho bạn một trải nghiệm mua sắm thời trang trực tuyến hiện đại,
               tiện lợi và đa dạng. Với bộ sưu tập phong phú từ các mẫu áo sơ mi, quần jeans, váy đầm đến những phụ kiện thời trang cao cấp,
                chúng tôi cam kết đáp ứng mọi phong cách từ năng động, trẻ trung đến lịch lãm,
                 sang trọng. Các sản phẩm đều được chọn lọc kỹ lưỡng từ các thương hiệu uy tín,
                  đảm bảo chất lượng và xu hướng mới nhất.
                   Hãy khám phá ngay để cập nhật tủ đồ của bạn với những thiết kế đẹp mắt và ưu đãi hấp dẫn!
              </p>

              <p>
              Quá trình chọn lọc sản phẩm của chúng tôi được thực hiện một cách tỉ mỉ và chuyên nghiệp,
               nhằm mang đến cho khách hàng những lựa chọn thời trang chất lượng nhất.
                Mỗi sản phẩm đều phải trải qua các bước kiểm tra nghiêm ngặt về chất liệu,
                 đường may, và thiết kế để đảm bảo tính thẩm mỹ lẫn độ bền.
                  Chúng tôi luôn cập nhật xu hướng thời trang mới nhất,
                   đồng thời hợp tác với những nhà cung cấp uy tín trong ngành.
                    Đội ngũ của chúng tôi không ngừng tìm kiếm những sản phẩm độc đáo,
                     phù hợp với nhiều phong cách, giúp bạn luôn tự tin và nổi bật trong mọi hoàn cảnh.
              </p>
            </div>

            <div className="services-details-image">
              <Image
                src="/images/services-details/service-details1.jpg"
                alt="image"
                width={660}
                height={530}
              />
            </div>
          </div>

          <div className="services-details-overview">
            <div className="services-details-image mb-30">
              <Image
                src="/images/services-details/service-details2.jpg"
                alt="image"
                width={660}
                height={530}
              />
            </div>

            <div className="services-details-desc">
              <h3>Liên hệ và hợp tác</h3>
              <p>
              Chúng tôi luôn sẵn sàng lắng nghe và hợp tác với các đối tác,
               nhà cung cấp, cũng như khách hàng để cùng nhau phát triển và mở rộng. 
               Dưới đây là các phương thức hợp tác và lợi ích khi trở thành khách hàng thân thiết hoặc nhà phân phối của chúng tôi:
              </p>

              <ul>
                <li>
                Hợp tác kinh doanh:
                Chúng tôi hoan nghênh sự hợp tác từ các nhà thiết kế, 
                nhà sản xuất và nhà phân phối. Với mạng lưới bán hàng trực tuyến mạnh mẽ và chiến lược quảng bá hiệu quả, 
                chúng tôi tin rằng việc hợp tác sẽ mang lại giá trị tối ưu cho cả hai bên.
                </li>
                <li>
                Ưu đãi dành cho khách hàng thân thiết:
                Khi trở thành khách hàng thân thiết, 
                bạn sẽ nhận được những ưu đãi đặc biệt bao gồm: 
                giảm giá độc quyền, tích điểm đổi quà, 
                quyền tham gia các chương trình khuyến mãi sớm và nhiều lợi ích khác dành riêng cho hội viên VIP của chúng tôi.
                </li>
                <li>
                Nhà phân phối sản phẩm:
                Nếu bạn quan tâm đến việc phân phối sản phẩm của chúng tôi, 
                chúng tôi luôn mở cửa cho các nhà phân phối tiềm năng. 
                Các đối tác phân phối sẽ được hưởng chiết khấu cao, 
                hỗ trợ quảng bá thương hiệu, và các quyền lợi ưu đãi khác.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
