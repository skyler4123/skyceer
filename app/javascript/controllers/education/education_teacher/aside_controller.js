// https://www.svgrepo.com/
import Education_AsideController from "controllers/education/aside_controller"

export default class Education_EducationTeacher_AsideController extends Education_AsideController {

  asideData() {
    return [
      {
        name: "Schools",
        url: `/education_schools`,
        icon: `
          <svg class="w-full h-full stroke-gray-200" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 15.5002H7M6 18.5002H7M17 18.5002H18M17 15.5002H18M10 22.0002V18.0002C10 16.8956 10.8954 16.0002 12 16.0002C13.1046 16.0002 14 16.8956 14 18.0002V22.0002M12 5H16.84C16.896 5 16.924 5 16.9454 4.9891C16.9642 4.97951 16.9795 4.96422 16.9891 4.9454C17 4.92401 17 4.89601 17 4.84V2.16C17 2.10399 17 2.07599 16.9891 2.0546C16.9795 2.03578 16.9642 2.02049 16.9454 2.0109C16.924 2 16.896 2 16.84 2H12.16C12.104 2 12.076 2 12.0546 2.0109C12.0358 2.02049 12.0205 2.03578 12.0109 2.0546C12 2.07599 12 2.10399 12 2.16V5ZM12 5V7.69092M12.03 12.25H12.0375M12 7.69092C12.1947 7.69092 12.3895 7.71935 12.5779 7.77623C13.0057 7.90536 13.3841 8.24585 14.1407 8.92681L17 11.5002L18.5761 11.8942C19.4428 12.1109 19.8761 12.2192 20.1988 12.4608C20.4834 12.674 20.7061 12.9592 20.8439 13.2871C21 13.6587 21 14.1053 21 14.9987V18.8002C21 19.9203 21 20.4804 20.782 20.9082C20.5903 21.2845 20.2843 21.5905 19.908 21.7822C19.4802 22.0002 18.9201 22.0002 17.8 22.0002H6.2C5.0799 22.0002 4.51984 22.0002 4.09202 21.7822C3.71569 21.5905 3.40973 21.2845 3.21799 20.9082C3 20.4804 3 19.9203 3 18.8002V14.9987C3 14.1053 3 13.6587 3.15613 13.2871C3.29388 12.9592 3.51657 12.674 3.80124 12.4608C4.12389 12.2192 4.55722 12.1109 5.42388 11.8942L7 11.5002L9.85931 8.92681C10.6159 8.24584 10.9943 7.90536 11.4221 7.77623C11.6105 7.71935 11.8053 7.69092 12 7.69092ZM12.03 13C11.6158 13 11.28 12.6642 11.28 12.25C11.28 11.8358 11.6158 11.5 12.03 11.5C12.4442 11.5 12.78 11.8358 12.78 12.25C12.78 12.6642 12.4442 13 12.03 13Z" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`
      },
      {
        name: "Teachers",
        url: `/education_teachers`,
        icon: `
          <svg class="w-full h-full fill-gray-200" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 299.97 299.97" xml:space="preserve">
            <g>
              <g>
                <g>
                  <path d="M149.985,126.898c34.986,0,63.449-28.463,63.449-63.449C213.435,28.463,184.971,0,149.985,0S86.536,28.463,86.536,63.449     C86.536,98.436,114.999,126.898,149.985,126.898z M149.985,15.15c26.633,0,48.299,21.667,48.299,48.299     s-21.667,48.299-48.299,48.299s-48.299-21.667-48.299-48.299S123.353,15.15,149.985,15.15z"/>
                  <path d="M255.957,271.919l-20.807-86.313c-2.469-10.244-11.553-17.399-22.093-17.399c-13.216,0-114.332,0-126.145,0     c-10.538,0-19.623,7.155-22.093,17.399l-20.807,86.313c-3.444,14.289,7.377,28.051,22.093,28.051h167.76     C248.563,299.97,259.407,286.229,255.957,271.919z M66.105,284.82c-4.898,0-8.513-4.581-7.364-9.35l20.807-86.314     c0.823-3.415,3.851-5.799,7.365-5.799H121.4l-9.553,67.577c-0.283,2,0.244,4.029,1.464,5.637l21.422,28.249H66.105z      M127.291,249.932l9.411-66.574h26.567l9.411,66.574l-22.695,29.927L127.291,249.932z M233.865,284.82h-68.628l21.421-28.248     c1.22-1.609,1.747-3.638,1.464-5.637l-9.553-67.577h34.487c3.513,0,6.542,2.385,7.365,5.8l20.807,86.313     C242.377,280.235,238.769,284.82,233.865,284.82z"/>
                </g>
              </g>
            </g>
          </svg>`
      },
      {
        name: "Teachers",
        url: `/education_students`,
        icon: `
          <svg class="w-full h-full fill-gray-200" height="800px" width="800px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
            <g>
              <path d="M473.61,63.16L276.16,2.927C269.788,0.986,263.004,0,256.001,0c-7.005,0-13.789,0.986-20.161,2.927   L38.386,63.16c-3.457,1.064-5.689,3.509-5.689,6.25c0,2.74,2.232,5.186,5.691,6.25l91.401,27.88v77.228   c0.023,39.93,13.598,78.284,38.224,107.981c11.834,14.254,25.454,25.574,40.483,33.633c15.941,8.564,32.469,12.904,49.124,12.904   c16.646,0,33.176-4.34,49.126-12.904c22.597-12.143,42.04-31.646,56.226-56.39c14.699-25.683,22.471-55.155,22.478-85.224v-78.214   l45.244-13.804v64.192c-6.2,0.784-11.007,6.095-11.007,12.5c0,5.574,3.649,10.404,8.872,12.011l-9.596,63.315   c-0.235,1.576,0.223,3.168,1.262,4.386c1.042,1.204,2.554,1.902,4.148,1.902h36.273c1.592,0,3.104-0.699,4.148-1.91   c1.036-1.203,1.496-2.803,1.262-4.386l-9.596-63.307c5.223-1.607,8.872-6.436,8.872-12.011c0-6.405-4.81-11.716-11.011-12.5V81.544   l19.292-5.885c3.457-1.064,5.691-3.517,5.691-6.25C479.303,66.677,477.069,64.223,473.61,63.16z M257.62,297.871   c-10.413,0-20.994-2.842-31.448-8.455c-16.194-8.649-30.908-23.564-41.438-42.011c-4.854-8.478-8.796-17.702-11.729-27.445   c60.877-10.776,98.51-49.379,119.739-80.97c10.242,20.776,27.661,46.754,54.227,58.648c-3.121,24.984-13.228,48.812-28.532,67.212   c-8.616,10.404-18.773,18.898-29.375,24.573C278.606,295.029,268.025,297.871,257.62,297.871z"/>
              <path d="M373.786,314.23l-1.004-0.629l-110.533,97.274L151.714,313.6l-1.004,0.629   c-36.853,23.036-76.02,85.652-76.02,156.326v0.955l0.846,0.45C76.291,472.365,152.428,512,262.249,512   c109.819,0,185.958-39.635,186.712-40.038l0.846-0.45v-0.955C449.808,399.881,410.639,337.265,373.786,314.23z"/>
            </g>
          </svg>`
      },
      {
        name: "Classes",
        url: `/education_classes`,
        icon: `
          <svg class="w-full h-full fill-gray-200" height="800px" width="800px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
            <g>
              <path d="M145.764,98.011c27.058,0,49.002-21.943,49.002-49.009C194.766,21.935,172.822,0,145.764,0   c-27.066,0-49.009,21.935-49.009,49.002C96.755,76.068,118.698,98.011,145.764,98.011z"/>
              <circle cx="110.089" cy="377.876" r="48.646"/>
              <path d="M110.321,450.209c-33.874-0.248-61.543,27-61.799,60.874L171.195,512   C171.442,478.126,144.195,450.466,110.321,450.209z"/>
              <circle cx="271.065" cy="377.876" r="48.646"/>
              <path d="M271.288,450.209c-33.866-0.248-61.544,27-61.792,60.874L332.17,512   C332.418,478.126,305.162,450.466,271.288,450.209z"/>
              <circle cx="432.033" cy="377.876" r="48.646"/>
              <path d="M432.255,450.209c-33.866-0.248-61.535,27-61.782,60.874L493.138,512   C493.393,478.126,466.129,450.466,432.255,450.209z"/>
              <path d="M272.66,235.671h-53.513v-39.657c0.264-35.212-24.332-64.79-57.363-72.143l-6.089,18.87h-19.87l-6.072-18.837   c-32.602,7.287-57.115,36.187-57.371,71.011v40.756H18.861v33.635H272.66V235.671z M135.825,153.597h19.87v61.114l-9.932,8.592   l-9.939-8.592V153.597z"/>
            </g>
          </svg>`
      },
      {
        name: "Score Boards",
        url: `/education_scoreboards`,
        icon: `
          <svg class="w-full h-full fill-gray-200" width="800px" height="800px" viewBox="0 0 800 800" enable-background="new 0 0 800 800" id="GUIDE" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g>
            <path d="M774.721,110.344c4.668-10.011,0.337-21.91-9.674-26.578L649.241,29.765c-4.807-2.242-10.309-2.482-15.292-0.668   c-4.985,1.814-9.045,5.534-11.287,10.342l-59.898,128.455l-29.281-86.015c-2.76-8.104-10.372-13.555-18.934-13.555H121.323   c-6.015,0-11.71,2.707-15.508,7.37l-77.922,95.678c-4.352,5.344-5.646,12.551-3.425,19.075L217.865,758.55   c2.759,8.104,10.371,13.555,18.933,13.555H659.33c11.047,0,20-8.954,20-20s-8.953-20-20-20H251.116L71.339,204.007l94.295,0.02   c0.001,0,0.003,0,0.004,0c6.824,0,13.178-3.479,16.853-9.229c3.676-5.751,4.164-12.98,1.296-19.174l-31.162-67.3H500.23   l38.11,111.947L405.278,505.625c-1.536,3.292-2.108,6.908-1.749,10.463c-0.008,0.002-0.015,0.003-0.023,0.005l12.581,124.188   c0.711,7.012,5.059,13.132,11.446,16.11c2.69,1.255,5.576,1.874,8.45,1.874c3.948,0,7.875-1.168,11.247-3.461l103.225-70.188   c-0.002-0.003-0.003-0.006-0.004-0.009c2.886-1.958,5.303-4.688,6.884-8.078l59.123-126.789l105.126,308.81   c2.833,8.321,10.605,13.56,18.932,13.56c2.137,0,4.312-0.345,6.447-1.072c10.457-3.559,16.047-14.922,12.488-25.378   L640.883,397.363L774.721,110.344z M85.477,164.01l31.145-38.242l17.713,38.252L85.477,164.01z M650.463,74.47l79.554,37.096   l-18.285,39.214l-79.554-37.097L650.463,74.47z M446.85,547.077l52.008,24.251L452.5,602.85L446.85,547.077z M529.535,541.499   l-79.553-37.096l165.291-354.468l79.553,37.097L529.535,541.499z"/>
            <path d="M608.921,220.086L528.08,393.45c-4.668,10.011-0.338,21.91,9.674,26.578c2.734,1.275,5.609,1.879,8.438,1.879   c7.532,0,14.747-4.275,18.14-11.553l80.841-173.364c4.669-10.011,0.337-21.91-9.674-26.578   C625.49,205.743,613.589,210.075,608.921,220.086z"/>
            <path d="M528.939,438.928c-10.01-4.668-21.91-0.336-26.578,9.675l-2.725,5.843c-4.667,10.012-0.336,21.911,9.676,26.578   c2.734,1.275,5.607,1.879,8.438,1.879c7.533,0,14.748-4.277,18.141-11.553l2.725-5.844   C543.283,455.494,538.951,443.595,528.939,438.928z"/>
            <path d="M176.516,244.257c-11.046,0-20,8.954-20,20s8.954,20,20,20h3.322c11.046,0,20-8.954,20-20s-8.954-20-20-20H176.516z"/>
            <path d="M443.271,284.257c11.046,0,20-8.954,20-20s-8.954-20-20-20H240.67c-11.045,0-20,8.954-20,20s8.955,20,20,20H443.271z"/>
            <path d="M418.624,420.214c0-11.046-8.954-20-20-20H229.608c-11.046,0-20,8.954-20,20s8.954,20,20,20h169.016   C409.67,440.214,418.624,431.26,418.624,420.214z"/>
            <path d="M282.698,556.171c-11.046,0-20,8.954-20,20s8.954,20,20,20h80.904c11.046,0,20-8.954,20-20s-8.954-20-20-20H282.698z"/>
            </g>
          </svg>
        `
      },
      {
        name: "Time Tables",
        url: `/education_time_tables`,
        icon: `
        <svg class="w-full h-full fill-gray-200" width="800px" height="800px" viewBox="0 0 32 32" data-name="Layer 13" id="Layer_13" xmlns="http://www.w3.org/2000/svg"><title/><path d="M28.55,6.57H26.42V4.93a0.5,0.5,0,1,0-1,0V6.57H19.81V5.06a0.5,0.5,0,0,0-1,0V6.57H13.19V5.06a0.5,0.5,0,0,0-1,0V6.57H6.58V5.06a0.5,0.5,0,1,0-1,0V6.57H3.45A2,2,0,0,0,1.5,8.52v17.1a2,2,0,0,0,1.95,2h25.1a2,2,0,0,0,1.95-2V8.52A2,2,0,0,0,28.55,6.57Zm-25.1,1H5.58V9.08a0.5,0.5,0,0,0,1,0V7.57h5.61V9.08a0.5,0.5,0,0,0,1,0V7.57h5.61V9.08a0.5,0.5,0,0,0,1,0V7.57h5.61V8.94a0.5,0.5,0,1,0,1,0V7.57h2.13a1,1,0,0,1,.95.95v2.94H2.5V8.52A1,1,0,0,1,3.45,7.57Zm25.1,19H3.45a1,1,0,0,1-.95-1V12.46h27V25.62A1,1,0,0,1,28.55,26.57Z"/><rect height="2.13" width="2.13" x="9.99" y="14.39"/><rect height="2.13" width="2.13" x="14.98" y="14.39"/><rect height="2.13" width="2.13" x="19.98" y="14.37"/><rect height="2.13" width="2.13" x="5" y="18.45"/><rect height="2.13" width="2.13" x="9.99" y="18.45"/><rect height="2.13" width="2.13" x="14.98" y="18.45"/><rect height="2.13" width="2.13" x="5" y="22.56"/><rect height="2.13" width="2.13" x="9.99" y="22.56"/><rect height="2.13" width="2.13" x="14.98" y="22.55"/><rect height="2.13" width="2.13" x="19.98" y="22.55"/><rect height="2.13" width="2.13" x="19.98" y="18.44"/><rect height="2.13" width="2.13" x="24.87" y="14.36"/><rect height="2.13" width="2.13" x="24.87" y="18.42"/></svg>
        `,
      },
      {
        name: "Courses",
        url: `/education_courses`,
        icon: `
          <svg class="w-full h-full fill-gray-200" width="800px" height="800px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
              <path d="M1750.21 0v1468.235h-225.882v338.824h169.412V1920H451.387c-82.447 0-161.506-36.141-214.701-99.388-43.934-51.953-67.652-116.33-67.652-182.965V282.353C169.034 126.494 295.528 0 451.387 0H1750.21Zm-338.823 1468.235H463.81c-89.223 0-166.136 59.86-179.576 140.047-1.242 9.036-2.259 18.07-2.259 27.106v2.26c0 40.658 13.553 77.928 40.659 109.552 32.753 38.4 79.059 59.859 128.753 59.859h960v-112.941H409.599v-112.942h1001.788v-112.94Zm225.882-1355.294H451.387c-92.725 0-169.412 75.67-169.412 169.412v1132.8c50.824-37.27 113.958-59.859 181.835-59.859h1173.46V112.941ZM1354.882 903.53v112.942H564.294V903.529h790.588Zm56.47-564.705v451.764H507.825V338.824h903.529Zm-112.94 112.94H620.765v225.883h677.647V451.765Z" fill-rule="evenodd"/>
          </svg>`
      },
      {
        name: "Subjects",
        url: `/education_subjects`,
        icon: `
          <svg class="w-full h-full fill-gray-200" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 31.314 31.314" xml:space="preserve">
            <g>
              <g>
                <rect x="23.698" y="15.251" width="5.051" height="1.879"/>
                <polygon points="2.932,0.464 2.932,3.417 4.222,3.019 4.222,1.754 30.023,1.754 30.023,18.202 9.492,18.202 9.425,19.491     31.314,19.491 31.314,0.464   "/>
                <circle cx="4.984" cy="7.527" r="3.822"/>
                <path d="M8.228,29.104v-6.802v-0.642v-0.87h0.243l0.355-6.905l6.59-3.414l-0.293-0.568l0.813-0.563    c0.085,0.085,0.18,0.158,0.292,0.194l0.017,0.913c-0.154,0.06-0.286,0.168-0.371,0.315c-0.097,0.168-0.122,0.364-0.071,0.552    c0.051,0.188,0.171,0.344,0.341,0.441c0.107,0.063,0.233,0.097,0.359,0.097c0.159,0,0.311-0.052,0.434-0.144l0.83,0.477    c-0.004,0.076,0.002,0.152,0.021,0.228c0.051,0.188,0.171,0.344,0.339,0.44c0.11,0.064,0.235,0.097,0.36,0.097    c0.262,0,0.504-0.14,0.632-0.365c0.084-0.143,0.108-0.303,0.088-0.456l0.794-0.446c0.127,0.112,0.29,0.184,0.473,0.187h0.01    c0.154,0,0.299-0.05,0.416-0.135l0.886,0.509c-0.004,0.076,0,0.152,0.021,0.228c0.051,0.188,0.172,0.344,0.342,0.441    c0.107,0.063,0.233,0.097,0.359,0.097c0.26,0,0.501-0.14,0.631-0.364c0.082-0.144,0.108-0.304,0.088-0.456l0.793-0.447    c0.131,0.117,0.297,0.185,0.473,0.187h0.011c0.396,0,0.722-0.321,0.728-0.717c0.002-0.288-0.162-0.537-0.408-0.658l-0.01-0.97    c0.236-0.117,0.405-0.359,0.41-0.641c0.002-0.194-0.07-0.377-0.207-0.517C24.88,8.288,24.7,8.21,24.495,8.207    c-0.218,0-0.411,0.1-0.545,0.254l-0.798-0.457c0.031-0.119,0.033-0.245,0-0.366c-0.034-0.132-0.107-0.248-0.204-0.339    c0.004,0.001,0.007,0.002,0.011,0.003c-0.059-0.057-0.121-0.105-0.193-0.141l-0.013-0.97c0.239-0.117,0.408-0.359,0.411-0.641    c0.004-0.195-0.07-0.378-0.205-0.518c-0.136-0.139-0.316-0.217-0.521-0.22c-0.217,0-0.41,0.1-0.545,0.254l-0.795-0.457    c0.03-0.12,0.033-0.245,0-0.366c-0.051-0.188-0.171-0.344-0.342-0.441c-0.107-0.063-0.232-0.097-0.359-0.097    c-0.26,0-0.502,0.14-0.631,0.365c-0.064,0.111-0.093,0.232-0.094,0.353l-0.826,0.469c-0.121-0.087-0.267-0.136-0.426-0.138    c-0.218,0-0.46,0.126-0.545,0.253c-0.061,0.08-0.243,0.234-0.186,0.621c0.06,0.387,0.347,0.486,0.5,0.538l0.016,0.895    c-0.004,0.001-0.008,0.004-0.012,0.005l0.031,0.006c-0.176,0.053-0.328,0.17-0.42,0.333c-0.066,0.111-0.095,0.233-0.096,0.353    l-0.854,0.485c-0.119-0.078-0.26-0.123-0.403-0.123c-0.132,0-0.261,0.036-0.375,0.104c-0.238,0.146-0.356,0.407-0.342,0.668    l-0.838,0.58l-0.348-0.67l-6.025,3.122h-2.15l-1.455,1.689l-1.409-1.69l-3.099,0.618l-0.196,6.825h1.312l0.071,1.426h0.2v0.87    v0.642v6.803H1.535L0,29.438v1.412h1.307l1.523-0.248l0.014,0.248h1.688v-1.574v-0.172v-6.802h0.961v6.802v0.172v1.574h1.688    l0.014-0.248l1.524,0.248h1.306v-1.412l-1.534-0.334H8.228z M16.795,11.293c-0.089,0.154-0.302,0.212-0.457,0.123    c-0.076-0.044-0.133-0.116-0.156-0.202c-0.022-0.086-0.012-0.176,0.033-0.254c0.061-0.103,0.172-0.167,0.29-0.167    c0.058,0,0.114,0.016,0.167,0.045C16.83,10.928,16.885,11.133,16.795,11.293z M18.779,12.391c-0.09,0.153-0.301,0.211-0.456,0.123    c-0.077-0.045-0.132-0.116-0.155-0.203c-0.023-0.086-0.012-0.176,0.033-0.253c0.061-0.104,0.171-0.168,0.289-0.168    c0.059,0,0.115,0.016,0.166,0.044C18.816,12.026,18.871,12.231,18.779,12.391z M20.484,11.478v0.196l-0.006-0.196    c-0.184-0.002-0.332-0.154-0.328-0.338c0.002-0.182,0.15-0.329,0.336-0.329c0.187,0.002,0.334,0.154,0.33,0.338    C20.814,11.33,20.667,11.478,20.484,11.478z M20.473,9.209c-0.185-0.002-0.332-0.155-0.33-0.339    c0.004-0.181,0.152-0.33,0.338-0.33c0.09,0.001,0.174,0.038,0.235,0.101c0.063,0.064,0.097,0.149,0.095,0.239    c-0.002,0.181-0.152,0.329-0.332,0.329v0.185L20.473,9.209z M22.798,12.449c-0.088,0.153-0.3,0.213-0.457,0.123    c-0.075-0.044-0.132-0.116-0.155-0.202c-0.022-0.086-0.011-0.176,0.033-0.253c0.059-0.104,0.172-0.168,0.29-0.168    c0.058,0,0.114,0.016,0.166,0.044C22.835,12.085,22.889,12.29,22.798,12.449z M24.835,11.207c-0.001,0.182-0.151,0.33-0.333,0.33    v0.197l-0.005-0.197c-0.09-0.001-0.173-0.037-0.233-0.101c-0.063-0.064-0.098-0.148-0.097-0.238    c0.003-0.182,0.151-0.33,0.339-0.33C24.689,10.871,24.838,11.023,24.835,11.207z M24.499,8.599    c0.088,0.002,0.172,0.038,0.233,0.102c0.062,0.064,0.098,0.148,0.095,0.237c-0.001,0.182-0.151,0.329-0.333,0.329v0.185    L24.49,9.267c-0.184-0.002-0.332-0.154-0.33-0.337C24.162,8.747,24.312,8.599,24.499,8.599z M22.96,8.345l0.817,0.471    c-0.004,0.035-0.01,0.071-0.01,0.108c-0.006,0.377,0.28,0.689,0.646,0.729l0.012,0.831c-0.359,0.038-0.648,0.34-0.65,0.71    c-0.002,0.076,0.011,0.148,0.033,0.218l-0.738,0.414c-0.055-0.067-0.121-0.127-0.201-0.172c-0.107-0.064-0.234-0.097-0.36-0.097    c-0.237,0-0.459,0.118-0.595,0.311l-0.762-0.438c0.037-0.084,0.057-0.177,0.059-0.274c0.003-0.287-0.162-0.536-0.408-0.657    l-0.011-0.97c0.239-0.116,0.407-0.359,0.412-0.642c0.001-0.1-0.019-0.197-0.058-0.286l0.689-0.391    c0.061,0.099,0.145,0.187,0.253,0.249c0.109,0.063,0.235,0.096,0.362,0.096C22.645,8.553,22.826,8.477,22.96,8.345z M22.773,7.74    c0.023,0.086,0.012,0.176-0.031,0.253c-0.09,0.153-0.303,0.212-0.458,0.123c-0.158-0.092-0.216-0.296-0.122-0.456    c0.061-0.103,0.17-0.167,0.29-0.167c0.06,0,0.114,0.015,0.166,0.045C22.693,7.582,22.751,7.653,22.773,7.74z M22.443,5.206    c0.088,0,0.172,0.037,0.233,0.101c0.062,0.064,0.095,0.148,0.095,0.238c-0.002,0.182-0.152,0.329-0.334,0.329h-0.004    c-0.185-0.002-0.332-0.154-0.33-0.338C22.105,5.353,22.256,5.206,22.443,5.206z M20.105,4.266c0.06-0.104,0.17-0.167,0.291-0.167    c0.059,0,0.113,0.016,0.164,0.044c0.078,0.045,0.133,0.117,0.157,0.203c0.022,0.086,0.013,0.176-0.032,0.253    c-0.09,0.154-0.303,0.212-0.459,0.123C20.068,4.631,20.014,4.426,20.105,4.266z M19.146,5.491c0.002-0.1-0.019-0.197-0.057-0.288    l0.688-0.39c0.063,0.099,0.146,0.188,0.255,0.25c0.11,0.063,0.235,0.096,0.36,0.096c0.192,0,0.375-0.077,0.51-0.208l0.818,0.471    c-0.006,0.036-0.012,0.071-0.013,0.108c-0.004,0.377,0.282,0.689,0.649,0.729l0.015,0.846c0.002,0,0.002,0,0.003,0    c-0.229,0.023-0.438,0.156-0.555,0.359c-0.064,0.111-0.092,0.232-0.094,0.353L20.9,8.286C20.779,8.2,20.634,8.15,20.477,8.148    c-0.22,0-0.414,0.099-0.545,0.253l-0.797-0.457c0.031-0.12,0.033-0.245,0-0.367c-0.044-0.158-0.138-0.292-0.267-0.389l0.017,0.002    c-0.044-0.034-0.088-0.065-0.14-0.09l-0.011-0.97C18.975,6.016,19.145,5.773,19.146,5.491z M18.086,5.476    c0.004-0.182,0.152-0.329,0.339-0.329c0.091,0.001,0.173,0.038,0.235,0.101c0.062,0.064,0.096,0.148,0.094,0.237    c-0.002,0.181-0.152,0.33-0.333,0.33h-0.005C18.23,5.813,18.084,5.66,18.086,5.476z M18.145,7.602    c0.061-0.104,0.17-0.167,0.291-0.167c0.058,0,0.113,0.015,0.164,0.044c0.078,0.045,0.135,0.116,0.156,0.203    c0.023,0.086,0.014,0.175-0.031,0.253c-0.09,0.153-0.303,0.212-0.457,0.123C18.107,7.965,18.053,7.761,18.145,7.602z     M17.158,9.023c0.041-0.16,0.021-0.325-0.047-0.474l0.707-0.4c0.061,0.1,0.146,0.187,0.252,0.249    c0.111,0.064,0.236,0.097,0.363,0.097c0.19,0,0.375-0.077,0.508-0.208l0.82,0.471c-0.007,0.036-0.013,0.071-0.014,0.108    c-0.003,0.323,0.207,0.598,0.497,0.696l0.015,0.895c-0.287,0.093-0.5,0.361-0.504,0.678c-0.001,0.076,0.014,0.148,0.034,0.218    l-0.737,0.414c-0.056-0.067-0.121-0.128-0.201-0.173c-0.108-0.063-0.233-0.096-0.361-0.096c-0.237,0-0.459,0.118-0.594,0.31    l-0.72-0.413c0.132-0.331,0.007-0.716-0.312-0.898c-0.071-0.041-0.15-0.068-0.229-0.083l-0.015-0.86    c0.071-0.017,0.142-0.043,0.204-0.082C16.994,9.37,17.111,9.212,17.158,9.023z M16.281,8.561c0.053-0.031,0.111-0.048,0.172-0.048    c0.119,0,0.227,0.061,0.285,0.162c0.048,0.077,0.061,0.167,0.039,0.253s-0.075,0.159-0.152,0.205    c-0.152,0.093-0.366,0.04-0.457-0.114C16.073,8.861,16.124,8.655,16.281,8.561z"/>
              </g>
            </g>
            </svg>`
      },
      {
        name: "Exams",
        url: `/education_exams`,
        icon: `
          <svg class="w-full h-full fill-gray-200" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
            <g>
              <g>
                <path d="M507.156,121.024l-22.113-22.112c-3.129-3.13-7.29-4.853-11.715-4.853s-8.587,1.723-11.715,4.853l-0.912,0.913V84.974    c0-18.566-15.105-33.671-33.671-33.671H33.671C15.105,51.304,0,66.408,0,84.974v342.052c0,18.566,15.105,33.671,33.671,33.671    H427.03c18.566,0,33.671-15.105,33.671-33.671V190.911l46.455-46.455C513.615,137.997,513.615,127.485,507.156,121.024z     M444.667,427.026c0,9.725-7.912,17.637-17.637,17.637H33.671c-9.725,0-17.637-7.912-17.637-17.637V84.974    c0-9.725,7.912-17.637,17.637-17.637H427.03c9.725,0,17.637,7.912,17.637,17.637v30.885l-35.274,35.274v-40.505    c0-3.557-2.344-6.689-5.758-7.692c-3.414-1-7.078,0.365-9.002,3.357l-31.737,49.369l-31.737-49.369    c-1.923-2.992-5.589-4.357-9.002-3.357c-3.413,1.003-5.758,4.135-5.758,7.692v85.513c0,4.427,3.589,8.017,8.017,8.017    s8.017-3.589,8.017-8.017v-58.217l23.72,36.899c1.475,2.294,4.016,3.681,6.744,3.681c2.728,0,5.269-1.387,6.744-3.681    l23.72-36.899v29.242L244.133,316.394h-47.988c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h36.439l-24.443,52.377    h-80.407c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h85.513c0.001,0,0.001,0,0.002,0    c1.147,0,2.304-0.246,3.387-0.753l64.135-29.93c0.847-0.396,1.618-0.935,2.279-1.596l36.132-36.132h65.09    c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017h-49.057l109.45-109.449V427.026z M248.323,336.618l21.128,21.128    l-39.615,18.487L248.323,336.618z M281.658,347.278l-22.867-22.867l188.884-188.884l22.868,22.868L281.658,347.278z     M495.819,133.118l-13.939,13.939l-22.868-22.868l13.939-13.939c0.208-0.207,0.547-0.207,0.756,0l22.112,22.111    C496.026,132.571,496.026,132.91,495.819,133.118z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M110.632,188.124H67.341v-26.723h34.74c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017h-34.74v-26.723h43.291    c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017H59.325c-4.427,0-8.017,3.589-8.017,8.017v85.513    c0,4.427,3.589,8.017,8.017,8.017h51.308c4.427,0,8.017-3.589,8.017-8.017S115.06,188.124,110.632,188.124z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M210.956,191.133l-30.199-37.749l30.199-37.749c2.765-3.457,2.205-8.502-1.252-11.268    c-3.457-2.766-8.503-2.205-11.268,1.252l-27.945,34.933l-27.946-34.931c-2.766-3.458-7.813-4.019-11.268-1.252    c-3.457,2.765-4.018,7.811-1.252,11.268l30.199,37.749l-30.199,37.749c-2.765,3.456-2.204,8.5,1.253,11.266    c1.478,1.182,3.246,1.757,5.003,1.757c2.352,0,4.682-1.03,6.265-3.009l27.946-34.931l27.946,34.931    c1.583,1.98,3.913,3.009,6.265,3.009c1.756,0,3.525-0.575,5.003-1.757C213.161,199.636,213.722,194.591,210.956,191.133z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M306.623,194.57l-15.041-75.202c-1.941-9.709-10.537-16.756-20.44-16.756h-13.174c-9.901,0-18.498,7.047-20.439,16.756    l-15.041,75.202c-0.868,4.341,1.948,8.564,6.289,9.433c4.341,0.867,8.564-1.948,9.433-6.289l3.842-19.209h45.004l3.842,19.209    c0.762,3.811,4.11,6.447,7.853,6.447c0.521,0,1.05-0.051,1.581-0.157C304.675,203.134,307.491,198.911,306.623,194.57z     M245.261,162.47l7.992-39.959c0.447-2.24,2.431-3.866,4.715-3.866h13.174c2.285,0,4.269,1.626,4.717,3.866l7.992,39.959H245.261z    "/>
              </g>
            </g>
            <g>
              <g>
                <path d="M76.427,230.881c-13.851,0-25.119,11.268-25.119,25.119c0,13.851,11.268,25.119,25.119,25.119    s25.119-11.268,25.119-25.119C101.547,242.149,90.278,230.881,76.427,230.881z M76.427,265.086c-5.01,0-9.086-4.076-9.086-9.086    c0-5.01,4.076-9.086,9.086-9.086c5.01,0,9.086,4.076,9.086,9.086C85.513,261.01,81.437,265.086,76.427,265.086z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M76.427,299.291c-13.851,0-25.119,11.268-25.119,25.119s11.268,25.119,25.119,25.119s25.119-11.268,25.119-25.119    S90.278,299.291,76.427,299.291z M76.427,333.496c-5.01,0-9.086-4.076-9.086-9.086s4.076-9.086,9.086-9.086    c5.01,0,9.086,4.076,9.086,9.086S81.437,333.496,76.427,333.496z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M76.427,367.701c-13.851,0-25.119,11.268-25.119,25.119c0,13.851,11.268,25.119,25.119,25.119    s25.119-11.268,25.119-25.119C101.547,378.97,90.278,367.701,76.427,367.701z M76.427,401.906c-5.01,0-9.086-4.076-9.086-9.086    c0-5.01,4.076-9.086,9.086-9.086c5.01,0,9.086,4.076,9.086,9.086C85.513,397.831,81.437,401.906,76.427,401.906z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M264.556,247.983H127.735c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h136.821    c4.427,0,8.017-3.589,8.017-8.017C272.572,251.573,268.983,247.983,264.556,247.983z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M161.94,316.394h-34.205c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h34.205    c4.427,0,8.017-3.589,8.017-8.017S166.367,316.394,161.94,316.394z"/>
              </g>
            </g>
            </svg>`
      },
      {
        name: "Payments",
        url: `/payment_orders`,
        icon: `
          <svg class="w-full h-full fill-gray-200" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" xml:space="preserve">
            <g>
              <g>
                <path d="M503.524,87.486h-92.897c-4.682,0-8.476,3.795-8.476,8.476c0,4.681,3.794,8.476,8.476,8.476h41.672    c3.604,21.854,20.895,39.144,42.749,42.749v98.963c-21.854,3.604-39.145,20.895-42.749,42.749H142.724    c-3.604-21.854-20.895-39.144-42.749-42.749v-98.963c21.854-3.604,39.144-20.895,42.749-42.749H381.49    c4.682,0,8.476-3.795,8.476-8.476c0-4.681-3.794-8.476-8.476-8.476H91.498c-4.681,0-8.476,3.795-8.476,8.476v201.412    c0,4.681,3.795,8.476,8.476,8.476h233.978v24.863H16.952V237.69c0-9.116,7.417-16.533,16.533-16.533h29.757    c4.681,0,8.476-3.795,8.476-8.476c0-4.681-3.795-8.476-8.476-8.476H33.484C15.022,204.207,0,219.227,0,237.691V391.03    c0,18.463,15.022,33.484,33.484,33.484h275.46c18.464,0,33.484-15.021,33.484-33.484v-85.179h161.096    c4.682,0,8.476-3.795,8.476-8.476V95.962C512,91.281,508.206,87.486,503.524,87.486z M99.974,104.438h25.456    c-3.12,12.488-12.968,22.336-25.456,25.456V104.438z M99.974,288.898v-25.456c12.488,3.12,22.336,12.968,25.456,25.456H99.974z     M325.476,363.487H83.754c-4.681,0-8.476,3.795-8.476,8.476s3.795,8.476,8.476,8.476h241.723v10.59    c0,9.117-7.416,16.533-16.531,16.533H33.484c-9.116,0-16.533-7.417-16.533-16.533v-10.59H52.11c4.681,0,8.476-3.795,8.476-8.476    s-3.795-8.476-8.476-8.476H16.952v-15.822h308.524V363.487z M495.048,288.898h-25.456c3.12-12.488,12.968-22.336,25.456-25.456    V288.898z M495.048,129.894c-12.488-3.12-22.336-12.968-25.456-25.456h25.456V129.894z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M297.511,119.181c-34.834,0-63.174,34.762-63.174,77.488c0,42.727,28.34,77.488,63.174,77.488    s63.174-34.762,63.174-77.488C360.685,153.942,332.345,119.181,297.511,119.181z M297.512,257.205    c-25.487,0-46.222-27.157-46.222-60.536s20.736-60.536,46.222-60.536c25.487,0,46.222,27.157,46.222,60.536    C343.734,230.048,322.999,257.205,297.512,257.205z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M470.807,177.458h-83.836c-4.682,0-8.476,3.795-8.476,8.476s3.794,8.476,8.476,8.476h83.836    c4.682,0,8.476-3.795,8.476-8.476S475.489,177.458,470.807,177.458z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M203.963,177.458h-83.837c-4.681,0-8.476,3.795-8.476,8.476s3.795,8.476,8.476,8.476h83.837    c4.681,0,8.476-3.795,8.476-8.476C212.439,181.253,208.644,177.458,203.963,177.458z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M470.807,206.341h-46.007c-4.682,0-8.476,3.795-8.476,8.476s3.794,8.476,8.476,8.476h46.007    c4.682,0,8.476-3.795,8.476-8.476S475.489,206.341,470.807,206.341z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M166.133,206.341h-46.007c-4.681,0-8.476,3.795-8.476,8.476s3.795,8.476,8.476,8.476h46.007    c4.681,0,8.476-3.795,8.476-8.476S170.814,206.341,166.133,206.341z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M322.053,188.193h-40.609v-12.812h40.609c4.682,0,8.476-3.795,8.476-8.476s-3.794-8.476-8.476-8.476h-16.066v-8.532    c0-4.681-3.794-8.476-8.476-8.476s-8.476,3.795-8.476,8.476v8.532h-16.067c-4.682,0-8.476,3.795-8.476,8.476v29.764    c0,4.681,3.794,8.476,8.476,8.476h40.609v12.812h-40.609c-4.682,0-8.476,3.795-8.476,8.476s3.794,8.476,8.476,8.476h16.067v8.532    c0,4.681,3.794,8.476,8.476,8.476s8.476-3.795,8.476-8.476v-8.532h16.066c4.682,0,8.476-3.795,8.476-8.476v-29.764    C330.529,191.988,326.735,188.193,322.053,188.193z"/>
              </g>
            </g>
          </svg>`
      },
    ]
  }

}