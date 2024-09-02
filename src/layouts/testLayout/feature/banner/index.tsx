import { BannerBox, BannerButton, BannerContent, BannerImage, BannerStyles, BannerTitle } from './styled';

export const BannerComponent: React.FC = () => {
  return (
    <BannerStyles>
      <BannerBox>
        <BannerTitle>Data-informed recommendations for your farm, down to each acre.</BannerTitle>
        <BannerContent>
          We make agricultural production more efficient and profitable with big data and quantum computing.
        </BannerContent>
        <BannerButton>Get TopCrop for your farm!</BannerButton>
        <BannerImage src="https://s3-alpha-sig.figma.com/img/22ee/be22/43944fc9d8dc79a2db03f0d62478bb4c?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PSRQCXrWPb3Cd7i84~zY3mvsH5KbR6iNNVKJJ7fAoXoIUuATLS86TzL3bvBohOkk85fsNaLJmDnC8BaQtxHLwYxODTP6JAwoRNczt9R8tgdIsrly-RXRIm9LwjcnRQIXRBJAXUF9Lg4bBrOguuEkM6DW8dVm2rmMKZc0c~eXmMqjpjeGoIcD8Ydx-9MwKR0ZmEMCYMr1fDRG-SLx7lETX94zOhmvkOYlLzJDvEMNoeYWtpHcXHD-~0QtzL1dtDqaXEWCUWN94nCxfCKa6dVYuonSa7mOt6tgJBCjJHHx51WWvQ9YPreZjYv29gV2EiG2erIlfJesdKcCaAvKY~~sRA__" />
      </BannerBox>
    </BannerStyles>
  );
};
