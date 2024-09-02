import {
  TechItemButtonBox,
  TechItemContentBox,
  TechItemButton,
  TechItemContentBoxContent,
  TechItemContentBoxTitles,
  TechItemImages,
  TechItems,
  TechnologyBox,
  TechnologyStyles,
  TechnologyTitles,
  TechItemIcon,
} from './styled';

export const TechnologyComponent: React.FC = () => {
  return (
    <TechnologyStyles>
      <TechnologyBox>
        <TechnologyTitles>Our technology</TechnologyTitles>
        <TechItems>
          <TechItemImages src="https://s3-alpha-sig.figma.com/img/96fc/9d67/dbb05417c7911eb25013ce9dbf12c1e0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n-OTf5fhsOxpXLWr6Ck0kqoK6NbyrEO7RPICWA4~O2I6A9TcTkobOFSBvCrNBoynxtGt0SyPnBJ7ZTI2mbg3pOce7VybwtwZuWNN42hywUn81W1wqmwiaJ1E3gTtzyKo07tWR1TFs9Xr73xiWc-PcWAz5gLU-aWQyTj-AorO~V~cSkk2gaS1d3AAoE1ezkP7m3pvK5Z80J1tkkJWBkmNqmhg9QKBe1b8k3gj6RlcaOo5bMLBRGGiKx3~uENOVjHs1pkXV67Lk87yl88h039J00eGsfmK6shqpzJ8ji7HmnrFyfiUhW~b7~vmOHf0lUway9Dz3c2ylBfAogyB-Rt6Fw__" />
          <TechItemContentBox>
            <TechItemContentBoxTitles>
              Our software learns from all possible data sources to give the best recommendations.
            </TechItemContentBoxTitles>
            <TechItemContentBoxContent>
              Quantum computers allow us to not leave any data behind. That means more accurate suggestions for higher
              yield.
            </TechItemContentBoxContent>
            <TechItemButtonBox>
              <TechItemButton>Learn more</TechItemButton>
              <TechItemIcon />
            </TechItemButtonBox>
          </TechItemContentBox>
        </TechItems>
        <TechItems>
          <TechItemContentBox style={{ marginTop: '100px', marginLeft: '250px' }}>
            <TechItemContentBoxTitles>Analysis of each field block, all in real-time.</TechItemContentBoxTitles>
            <TechItemContentBoxContent>
              Reduce fertilizer, pesticide, and water waste due to ever-changing conditions on the field.
            </TechItemContentBoxContent>
            <TechItemButtonBox>
              <TechItemButton>Learn more</TechItemButton>
              <TechItemIcon />
            </TechItemButtonBox>
          </TechItemContentBox>
          <TechItemImages src="https://s3-alpha-sig.figma.com/img/4a56/5e47/9cb7ec35c4a06f22b78c52cb3d339443?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P2wD38uYuEE1-3yDFOCVAQe65T6VgZft16BxraHlz3x3aZ2Xh1FTYdW~Wco1z8g2QvOftz7oqLh53iqs1-u08iNsqmLFEXDUU4heSpYhMSjA2CncsVGeS7wtBs8IN-v3gKtKG3VW5juHOxYfQiZmsMM3xb~puUuXuI9LouyegjGLaXgKFfAb9f97igMPMc~OiugSSw~KrMiaIG0-JKuFG93Onjrh-ev30JSKY7nFnZ4960KgKV1MZ2QxollrzIqpTH1VxmBcBKlhK1HWOumn4Y88bSW7eBQdUIEhtVJ6GIUzbdlavKVed-VnULP-cSPJSAzxgEDboLrLQFYT6hydPg__" />
        </TechItems>
        <TechItems>
          <TechItemImages src="https://s3-alpha-sig.figma.com/img/a060/5f90/5b9765dce4443ec300863ea96582bf2c?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T1A6TsNe6XYdVAsJvH1-5C0XdukhOgQrsWPVa0LAXhdy62Mt1BkmZgdzNmOf1RcpR5RxKJihm0hWdF8H3S2bVuQx-1G5QjjLMgmaPGO-uxZNuhjbOL6q2ezcRNchSMh77MW8pfP96dXAR-p36El4ZbW835QZCXbgRFF7ZzcgcE0Du1J5xzgalAKj7KGWaJJ7SWelhjUAQslY5kdzrVmyaZlnOM60TB-Rnp-vK38iUrqUUTcsFHs5WO3E6rk8gHpN-GSOkySYMUFHi0Eg8ypHjfnyEw0nxIwk1oJ841o3kn8pSLLDgmquxMnfAxr2p~GQIGVzweUO8ZwUKCTNFOqU2g__" />
          <TechItemContentBox>
            <TechItemContentBoxTitles style={{ marginTop: '100px' }}>
              Timely alerts and communications across the field.
            </TechItemContentBoxTitles>
            <TechItemContentBoxContent>
              Changes of conditions need changes of plan. Luckily, your new plan is only one tap away from reaching the
              whole team.
            </TechItemContentBoxContent>
            <TechItemButtonBox>
              <TechItemButton>Learn more</TechItemButton>
              <TechItemIcon />
            </TechItemButtonBox>
          </TechItemContentBox>
        </TechItems>
      </TechnologyBox>
    </TechnologyStyles>
  );
};
