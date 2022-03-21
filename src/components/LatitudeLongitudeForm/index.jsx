import { useState, useEffect } from 'react';
import SunriseSunsetDataView from '../SunriseSunsetDataView';
import {
  StyledForm,
  StyledInput,
  StyledLocationButton,
  StyledResetButton,
  StyledDataViewWrapper,
} from './_.styled';

function LatitudeLongitudeForm() {
  const initialValues = {
    latitude: '',
    longitude: '',
  };
  const [values, setValues] = useState(initialValues);
  const [latAndLong, setLatAndLong] = useState({});

  const [timeData, setTimeData] = useState([]);

  useEffect(() => {
    const { latitude, longitude } = latAndLong;
    if (!latitude || !longitude) return;
    const url = `https://api.ipgeolocation.io/astronomy?apiKey=${process.env.REACT_APP_IPGEOLOCATION_API_KEY}&lat=${latitude}&long=${longitude}`;
    const fetchData = async () => {
      try {
        const data = await fetch(url);
        const { sunrise, sunset } = await data.json();
        setTimeData([
          ...timeData,
          {
            latitude,
            longitude,
            sunrise,
            sunset,
          },
        ]);
      } catch (error) {
        return {};
      }
    };
    fetchData();
    setLatAndLong({});
  }, [timeData, latAndLong]);

  const handleChange = e => {
    const value = e.target.value;
    setValues({
      ...values,
      [e.target.name]: value,
    });
  };

  const reset = () => {
    setTimeData([]);
    setLatAndLong({});
    setValues(initialValues);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (e.target[2].name === 'reset') {
      reset();
    } else {
      setLatAndLong({ ...values });
      setValues(initialValues);
    }
  };
  console.log(`data passed in: ${JSON.stringify(timeData)}`);
  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <StyledInput
            aria-label="latitude input"
            type="number"
            name="latitude"
            value={values.latitude}
            onChange={handleChange}
            placeholder="Latitude"
          />
          <StyledInput
            aria-label="latitude input"
            type="number"
            name="longitude"
            value={values.longitude}
            onChange={handleChange}
            placeholder="Longitude"
          />
          {timeData.length < 5 ? (
            <StyledLocationButton
              aria-label="submit latitude and longitude"
              type="submit"
              name="submit"
              disabled={
                !values.latitude || !values.longitude || timeData.length >= 5
              }
            >
              Add Location
            </StyledLocationButton>
          ) : (
            <StyledResetButton
              aria-label="reset locations"
              type="submit"
              name="reset"
            >
              Reset
            </StyledResetButton>
          )}
        </div>
      </StyledForm>
      <StyledDataViewWrapper>
        <SunriseSunsetDataView timeData={timeData} />
      </StyledDataViewWrapper>
    </div>
  );
}
export default LatitudeLongitudeForm;
