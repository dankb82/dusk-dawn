import { StyledImageWrapper, StyledHeader } from './_.styled';

function SunriseSunsetDataView({ timeData }) {
  return (
    <div>
      <StyledHeader>Sunrise and Sunset</StyledHeader>
      <StyledImageWrapper>
        <img src="img/dusk-dawn.jpg" alt="Sunrise/Sunset" />
      </StyledImageWrapper>
      {timeData.length > 0 && (
        <section>
          <ul>
            {timeData?.map(info => (
              <li key={info.latitude + `-` + info.longitude}>
                <label>{info.latitude + `/` + info.longitude}</label>:{' '}
                <span>
                  Sunrise: {info.sunrise} Sunset: {info.sunset}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

export default SunriseSunsetDataView;
