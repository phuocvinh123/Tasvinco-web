import { Dailybg } from 'assets';
import { ContentStyles, ImageStyles, MainBoxStyles, MainStyles, Mapstyles } from './styled';

export const GoogleMapsEmbed = () => {
  return (
    <>
      <MainBoxStyles>
        <ImageStyles src={Dailybg} />
      </MainBoxStyles>
      <MainStyles>
        <ContentStyles>Bạn muốn tìm địa chỉ của vinacom</ContentStyles>
        <Mapstyles>
          <iframe
            title="Google Maps vinacom"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15334.791442484428!2d108.1547262!3d16.0811611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218cd6f95aaa3%3A0xe800eb7f04658b47!2sKhu%20C%C3%B4ng%20nghi%E1%BB%87p%20H%C3%B2a%20Kh%C3%A1nh%20-%20Hoa%20Khanh%20Industrial%20Zone!5e0!3m2!1svi!2s!4v1739203771053!5m2!1svi!2s"
            width="800"
            height="500"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <iframe
            title="trang FB vinacom"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FtienganhonlineNativeX&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="340"
            height="500"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </Mapstyles>
      </MainStyles>
    </>
  );
};
