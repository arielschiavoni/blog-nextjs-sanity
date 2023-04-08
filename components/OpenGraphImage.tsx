// Renders the Open Graph image used on the home page

export const width = 1200
export const height = 630

export function OpenGraphImage(props: { title: string }) {
  const { title } = props
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        backgroundColor: 'white',
        backgroundImage:
          'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
        backgroundSize: '100px 100px',
        backgroundPosition: '0 -8px, 0 -8px',
      }}
    >
      <div
        style={{
          display: 'flex',
        }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          fill="#000000"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="350px"
          height="350px"
          viewBox="0 0 912.113 912.113"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <g>
                <path
                  d="M122.306,657.73c4.3,0,10.9-3.5,21.9-10.301c25.4-15.5,45.5-46.8,59.9-88c19.9-57,28.8-133,25.9-213.1
				c-2.9-78.5,29.1-154.5,72.2-219c13.899-20.8,43.6-45.601,14.7-45.601c-68.8,0-407.4,174-293.8,343.7
				C131.707,587.73,103.207,657.73,122.306,657.73z"
                />
                <path
                  d="M609.907,127.43c43,64.5,75,140.601,72.199,219c-2.899,80,6,156.101,25.9,213.101c14.4,41.2,34.5,72.5,59.9,88
				c11.1,6.8,17.699,10.3,21.899,10.3c19,0-9.399-70.1,99.2-232.3c113.6-169.7-225-343.7-293.8-343.7
				C566.207,81.83,596.007,106.63,609.907,127.43z"
                />
                <path
                  d="M223.606,603.93c5.4,11.2,11.1,22.4,17,33.5c67.3,126.101,58.9,143,58.9,174.9c0,29.2,66.8,49.9,136.4-5.5v-57
				c-26-11.1-57.4-39.7-57.4-65.3c0-32.601,34.4-37.5,76.9-37.5c0.199,0,0.399,0,0.6,0c0,0,0.4,0,0.6,0
				c42.5,0,76.901,4.899,76.901,37.5c0,25.6-31.4,54.2-57.4,65.3v57c70,55.4,136.4,34.7,136.4,5.5c0-32-8.4-48.8,58.9-174.9
				c5.899-11.1,11.6-22.3,17-33.5c-8.5-17.6-15.801-37.699-21.801-59.899c-15.399-56.8-22.199-125.601-19.5-198.801
				c1-27.699-2.8-56.6-11.399-86c-7-24-17.101-48.199-30.101-72.1c-21.8-40.2-47.699-69.8-47.699-69.8
				c-8.2-12.101-10.2-22.9-9.7-31.601c-50.8-17.1-92.201-15.1-92.201-15.1c-0.2,0-41.4-2-92.2,15.1c0.601,8.7-1.5,19.5-9.7,31.601
				c0,0-25.899,29.6-47.699,69.8c-13,23.9-23.101,48.2-30.101,72.1c-8.6,29.301-12.399,58.301-11.399,86
				c2.699,73.301-4.101,142.001-19.5,198.801C239.406,566.23,232.106,586.23,223.606,603.93z M565.907,336.33
				c26,0,47.1,21.1,47.1,47.1s-21.1,47.101-47.1,47.101s-47.101-21.101-47.101-47.101S539.907,336.33,565.907,336.33z
				 M346.106,336.33c26,0,47.101,21.1,47.101,47.1s-21.101,47.101-47.101,47.101s-47.1-21.101-47.1-47.101
				S320.106,336.33,346.106,336.33z"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 40,
          fontStyle: 'normal',
          color: 'black',
          marginTop: 0,
          lineHeight: 1.8,
          whiteSpace: 'pre-wrap',
        }}
      >
        <b style={{ background: '#fff' }}>{title}</b>
      </div>
      <div
        style={{
          display: 'flex',
        }}
      />
    </div>
  )
}
