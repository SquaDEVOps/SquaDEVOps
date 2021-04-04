function WorkItems(){
    let svgViking = `
                        <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512"><g><g><circle cx="401.128" cy="251.131" fill="#ffbf9e" r="36.081"/></g><g><circle cx="110.87" cy="251.131" fill="#f7ab8b" r="36.081"/></g><g><path d="m156.905 504.5c-12.566 0-22.098-11.469-19.643-23.793 11.054-55.475 60.014-97.282 118.738-97.282s107.684 41.808 118.738 97.282c2.456 12.324-7.076 23.793-19.643 23.793z" fill="#4e5660"/></g><g><path d="m280.993 386.03c-8.065-1.705-16.426-2.605-24.993-2.605-58.6 0-107.629 41.885-118.724 97.271-2.469 12.326 7.069 23.804 19.64 23.804h28.008c.001-58.166 41.276-106.909 96.069-118.47z" fill="#383c43"/></g><g><path d="m437.597 293.42c0-21.049-17.063-38.112-38.112-38.112v-20.678l-1.373-19.941c-9.706-69.807-69.633-123.545-142.112-123.545s-132.406 53.738-142.112 123.545l-1.373 19.941v20.678c-21.049 0-38.112 17.063-38.112 38.112 0 16.718 10.769 30.911 25.744 36.048-3.831 5.944-6.063 13.016-6.063 20.613 0 20.602 16.35 37.375 36.78 38.078-.95 3.329-1.469 6.84-1.469 10.474 0 21.049 17.063 38.112 38.112 38.112 2.591 0 5.121-.261 7.568-.754 6.501 11.72 18.994 19.656 33.345 19.656 6.816 0 13.208-1.798 18.744-4.932 6.989 8.085 17.311 13.208 28.836 13.208s21.848-5.123 28.836-13.208c5.536 3.134 11.928 4.932 18.744 4.932 14.352 0 26.845-7.936 33.345-19.656 2.446.493 4.976.754 7.568.754 21.049 0 38.112-17.063 38.112-38.112 0-3.634-.519-7.145-1.469-10.474 20.431-.703 36.78-17.476 36.78-38.078 0-7.597-2.232-14.669-6.063-20.613 14.976-5.137 25.744-19.33 25.744-36.048z" fill="#e26e7e"/></g><g><path d="m227.175 450.727c-4.843-7.124-7.676-15.724-7.676-24.988 0-7.339 1.788-14.257 4.935-20.36-24.098-.551-43.467-20.244-43.467-44.474 0-24.577 19.923-44.5 44.5-44.5v-221.998c-58.221 12.619-103.275 60.568-111.577 120.282l-1.373 19.941v20.678c-21.049 0-38.112 17.063-38.112 38.112 0 16.718 10.769 30.911 25.744 36.048-3.831 5.944-6.063 13.016-6.063 20.613 0 20.602 16.35 37.375 36.78 38.078-.95 3.329-1.469 6.84-1.469 10.474 0 21.049 17.063 38.112 38.112 38.112 2.591 0 5.121-.261 7.568-.754 6.501 11.72 18.994 19.656 33.345 19.656 6.816 0 13.208-1.798 18.744-4.932.002.004.005.008.009.012z" fill="#d3596e"/></g><g><g><path d="m447.321 13.308-19.349 38.699c-7.199 14.398-21.915 23.493-38.013 23.493h-267.917c-16.098 0-30.814-9.095-38.013-23.493l-19.35-38.699c-1.78-3.56-5.418-5.808-9.397-5.808-5.803 0-10.507 4.704-10.507 10.507v40.493c0 46.944 38.056 85 85 85h252.45c46.944 0 85-38.056 85-85v-40.493c0-5.803-4.704-10.507-10.507-10.507-3.979 0-7.617 2.248-9.397 5.808z" fill="#fcf2d0"/></g></g><g><g><path d="m382.225 109.5h-252.45c-46.944 0-85-38.056-85-85v34c0 46.944 38.056 85 85 85h252.45c46.944 0 85-38.056 85-85v-34c0 46.944-38.056 85-85 85z" fill="#efdfb4"/></g></g><g><g><path d="m255.999 43.5c-88.366 0-160 71.634-160 160h320c0-88.366-71.635-160-160-160z" fill="#9aa3b1"/></g></g><g><path d="m256 43.5h-.001c-88.365 0-160 71.634-160 160h60c0-67.146 41.365-124.623 100.001-148.357z" fill="#7e8b9e"/></g><g><path d="m256 7.5c-11.046 0-20 8.954-20 20v176h40v-176c0-11.046-8.954-20-20-20z" fill="#fcf2d0"/></g><g><path d="m256 129.407c-11.046 0-20-8.954-20-20v94.093h40v-94.093c0 11.046-8.954 20-20 20z" fill="#efdfb4"/></g><g><path d="m147.726 213.137v75.424c0 22.281 18.063 40.344 40.344 40.344h135.861c22.281 0 40.344-18.063 40.344-40.344v-75.424z" fill="#ffd4be"/></g><g><path d="m237.175 288.561v-75.424h-89.449v75.424c0 22.281 18.063 40.344 40.344 40.344h89.449c-22.282 0-40.344-18.062-40.344-40.344z" fill="#ffbf9e"/></g><g><path d="m207.315 249.111-24.065-6.448c-3.995-1.067-8.113 1.302-9.186 5.304-1.072 4.001 1.302 8.113 5.303 9.186l7.078 1.897c-.252.75-.394 1.551-.394 2.386v10.366c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-8.839l2.381.638c.65.174 1.303.257 1.946.257 3.311 0 6.342-2.21 7.24-5.561 1.072-4.001-1.302-8.113-5.303-9.186z"/><path d="m337.936 247.967c-1.071-4.001-5.183-6.373-9.186-5.304l-24.065 6.448c-4.001 1.072-6.375 5.185-5.303 9.186.897 3.351 3.928 5.561 7.239 5.561.643 0 1.296-.083 1.946-.257l2.381-.638v8.839c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10.366c0-.835-.142-1.636-.394-2.386l7.079-1.897c4.001-1.073 6.375-5.185 5.303-9.186z"/></g><g><path d="m145.232 289.522c17.134 17.149 44.928 17.155 62.07.014 13.042-13.042 34.188-13.042 47.23 0l.108.108c13.042 13.042 13.042 34.188 0 47.23l-6.521 6.521c-27.07 27.07-70.959 27.07-98.029 0-13.101-13.101-19.861-30.142-20.28-47.309-.199-8.134 9.672-12.319 15.422-6.564z" fill="#e8899e"/></g><g><path d="m366.769 289.522c-17.134 17.149-44.928 17.155-62.07.014-13.042-13.042-34.188-13.042-47.23 0l-.108.108c-13.042 13.042-13.042 34.188 0 47.23l6.521 6.521c27.07 27.07 70.959 27.07 98.029 0 13.101-13.101 19.861-30.142 20.28-47.309.198-8.134-9.672-12.319-15.422-6.564z" fill="#e8899e"/></g><g><path d="m446 223.5h-380c-11.046 0-20-8.954-20-20 0-11.046 8.954-20 20-20h380c11.046 0 20 8.954 20 20 0 11.046-8.954 20-20 20z" fill="#c6c6c6"/></g><g><path d="m217.175 203.5c0-11.046 8.954-20 20-20h-171.175c-11.046 0-20 8.954-20 20s8.954 20 20 20h171.175c-11.046 0-20-8.954-20-20z" fill="#9aa3b1"/></g><g><circle cx="331.823" cy="132.092" fill="#7e8b9e" r="20"/></g><g><circle cx="180.175" cy="132.092" fill="#7e8b9e" r="20"/></g><g><path d="m474.725 58.5v-40.494c0-9.928-8.077-18.006-18.006-18.006-6.865 0-13.037 3.814-16.105 9.954l-19.35 38.698c-5.967 11.934-17.963 19.348-31.305 19.348h-35.485c-20.608-15.001-44.766-25.413-70.974-29.743v-10.757c0-15.164-12.337-27.5-27.5-27.5-15.164 0-27.5 12.336-27.5 27.5v10.756c-26.198 4.329-50.353 14.742-70.962 29.744h-35.497c-13.343 0-25.338-7.414-31.305-19.348l-19.349-38.697c-3.069-6.141-9.24-9.955-16.105-9.955-9.929 0-18.007 8.078-18.007 18.006v40.494c0 13.088 2.681 25.741 7.967 37.608 1.244 2.792 3.984 4.45 6.855 4.45 1.02 0 2.056-.209 3.048-.651 3.784-1.686 5.484-6.12 3.799-9.903-4.426-9.934-6.669-20.533-6.669-31.504v-40.494c0-1.658 1.349-3.006 3.007-3.006 1.146 0 2.176.637 2.689 1.662l19.35 38.698c8.523 17.049 25.66 27.64 44.721 27.64h17.635c-14.442 13.944-26.387 30.459-35.094 48.813-11.389-3.915-21.769-10.476-30.261-19.173-2.894-2.964-7.643-3.02-10.605-.126-2.964 2.894-3.02 7.642-.126 10.605 9.896 10.134 21.949 17.83 35.176 22.539-3.579 9.722-6.281 19.867-8.012 30.341h-24.755c-15.164 0-27.5 12.336-27.5 27.5s12.337 27.501 27.5 27.501h6.218c-3.202 6.147-4.929 13.038-4.929 20.131 0 7.235 1.769 14.253 5.143 20.548-3.522 6.467-5.529 13.873-5.529 21.741 0 16.577 8.963 31.6 22.988 39.607-2.177 5.39-3.306 11.167-3.306 17.054 0 21.777 15.024 39.913 35.493 44.488-.121 1.351-.182 2.707-.182 4.064 0 17.205 9.578 32.211 23.679 39.978-7.528 12.573-12.793 26.207-15.668 40.63-1.604 8.047.471 16.312 5.692 22.676 5.257 6.408 13.022 10.083 21.306 10.083h198.191c8.284 0 16.05-3.675 21.307-10.083 5.221-6.364 7.295-14.628 5.691-22.675-2.875-14.43-8.143-28.06-15.67-40.629 14.102-7.767 23.681-22.774 23.681-39.979 0-1.363-.062-2.725-.184-4.081 5.486-1.244 10.711-3.498 15.413-6.678 3.432-2.32 4.332-6.983 2.012-10.414-2.321-3.432-6.984-4.332-10.414-2.012-4.752 3.214-10.304 5.017-16.054 5.215-2.307.08-4.448 1.216-5.806 3.082s-1.782 4.253-1.148 6.472c.783 2.745 1.181 5.576 1.181 8.416 0 16.879-13.732 30.612-30.611 30.612-2.041 0-4.089-.204-6.087-.606-3.204-.644-6.454.857-8.039 3.714-5.404 9.742-15.668 15.794-26.787 15.794-5.271 0-10.475-1.369-15.049-3.959-3.112-1.762-7.033-1.082-9.369 1.623-5.83 6.744-14.272 10.612-23.162 10.612s-17.333-3.868-23.163-10.613c-2.337-2.705-6.259-3.382-9.369-1.622-4.574 2.59-9.777 3.958-15.048 3.958-11.119 0-21.383-6.052-26.787-15.794-1.585-2.857-4.839-4.358-8.04-3.714-1.997.402-4.045.606-6.086.606-16.879 0-30.612-13.732-30.612-30.612 0-2.836.397-5.668 1.182-8.417.633-2.219.209-4.606-1.149-6.472s-3.5-3.002-5.806-3.082c-16.563-.57-29.538-14.003-29.538-30.583 0-5.887 1.683-11.61 4.867-16.55 1.249-1.938 1.537-4.343.782-6.521-.756-2.178-2.471-3.888-4.652-4.636-12.368-4.243-20.678-15.878-20.678-28.954 0-16.879 13.732-30.612 30.612-30.612 4.142 0 7.5-3.358 7.5-7.5v-20.42l.268-3.888h19.944v48.427c-2.64-.22-5.351.187-7.914 1.285-6.24 2.673-10.166 8.779-10 15.557.483 19.8 8.465 38.42 22.475 52.429 14.509 14.509 33.799 22.5 54.317 22.5s39.809-7.99 54.318-22.5l2.576-2.576 2.578 2.578c14.509 14.509 33.799 22.5 54.317 22.5 20.52 0 39.81-7.991 54.317-22.5 14.011-14.009 21.992-32.629 22.476-52.43.165-6.777-3.761-12.883-10.001-15.556-2.562-1.097-5.273-1.504-7.913-1.284v-48.428h19.943l.268 3.888v20.42c0 4.142 3.357 7.5 7.5 7.5 16.879 0 30.611 13.732 30.611 30.612 0 13.076-8.31 24.711-20.678 28.954-2.181.748-3.896 2.458-4.652 4.636s-.467 4.583.782 6.521c3.184 4.94 4.867 10.664 4.867 16.55 0 1.983-.19 3.968-.567 5.9-.791 4.066 1.863 8.003 5.93 8.795.483.094.966.14 1.44.14 3.518 0 6.657-2.487 7.354-6.068.559-2.875.843-5.824.843-8.767 0-5.887-1.13-11.664-3.307-17.054 14.024-8.007 22.987-23.031 22.987-39.607 0-7.871-2.009-15.279-5.533-21.748 3.371-6.296 5.144-13.322 5.144-20.541 0-7.077-1.737-13.974-4.943-20.131h6.237c15.163 0 27.5-12.336 27.5-27.5s-12.337-27.5-27.5-27.5h-24.758c-1.73-10.473-4.431-20.616-8.007-30.336 36.541-12.985 61.49-47.845 61.49-87.164zm-303.39 385.585c8.508 11.872 22.288 19.062 37.085 19.062 5.896 0 11.736-1.15 17.167-3.356 8.32 7.45 19.123 11.632 30.413 11.632s22.093-4.183 30.412-11.632c5.433 2.207 11.272 3.356 17.168 3.356 14.798 0 28.577-7.19 37.086-19.062 1.273.106 2.551.16 3.827.16 2.522 0 4.994-.215 7.405-.61 7.532 11.828 12.742 24.773 15.484 38.539.723 3.624-.217 7.353-2.577 10.229-2.396 2.922-5.936 4.597-9.71 4.597h-198.19c-3.774 0-7.313-1.675-9.709-4.597-2.36-2.877-3.3-6.606-2.578-10.23 2.742-13.759 7.947-26.708 15.479-38.54 2.413.396 4.887.611 7.41.611 1.276.001 2.554-.053 3.828-.159zm218.624-361.085c19.061 0 36.196-10.591 44.721-27.64l19.351-38.699c.512-1.025 1.542-1.662 2.688-1.662 1.657 0 3.006 1.349 3.006 3.006v40.495c0 33.229-21.266 62.65-52.31 73.301-8.704-18.35-20.643-34.86-35.08-48.801zm-133.959-68c6.893 0 12.5 5.607 12.5 12.5v148.5h-25v-148.5c0-6.893 5.608-12.5 12.5-12.5zm-27.5 38.479v122.521h-122.527c11.325-62.205 60.391-111.206 122.527-122.521zm-123.468 180.636c-.012.171-.018.343-.018.515v13.794c-8.193 1.361-15.652 4.918-21.758 10.037-.628-2.373-.968-4.829-.968-7.331 0-7.573 3.008-14.792 8.307-20.131h14.651zm50.361 103.976c-11.273-11.274-17.696-26.257-18.085-42.189-.006-.248-.024-1.001.911-1.402.642-.275 1.218-.168 1.708.323 9.704 9.711 22.608 15.062 36.336 15.064h.012c13.724 0 26.626-5.344 36.331-15.049 4.892-4.891 11.395-7.585 18.312-7.585 5.484 0 10.704 1.699 15.071 4.838-7.903 13.066-7.838 29.626.19 42.637l-3.362 3.362c-24.104 24.104-63.322 24.104-87.424.001zm218.388-43.591c.936.4.917 1.154.911 1.402-.389 15.933-6.812 30.916-18.086 42.189-11.675 11.676-27.198 18.106-43.711 18.106-16.512 0-32.035-6.43-43.711-18.106l-6.521-6.52c-10.097-10.097-10.097-26.526-.013-36.611l.121-.12c4.891-4.891 11.394-7.585 18.311-7.585 6.918 0 13.421 2.694 18.312 7.585 9.705 9.705 22.606 15.049 36.332 15.049h.012c13.729-.003 26.633-5.353 36.336-15.065.489-.49 1.064-.6 1.707-.324zm-17.006-6.32c-6.107 4.351-13.39 6.707-21.04 6.708-.003 0-.005 0-.008 0-9.718 0-18.854-3.784-25.725-10.655-7.725-7.725-17.994-11.979-28.919-11.979-9.208 0-17.945 3.033-25.084 8.603-7.144-5.572-15.878-8.603-25.082-8.603-10.924 0-21.194 4.254-28.918 11.979-6.872 6.872-16.006 10.655-25.725 10.655-.002 0-.006 0-.008 0-7.649-.001-14.932-2.357-21.039-6.708v-57.18h201.548zm72.933-37.049c0 2.498-.339 4.955-.967 7.329-6.106-5.118-13.564-8.674-21.756-10.035v-13.795c0-.172-.006-.344-.018-.516l-.214-3.114h14.656c5.292 5.337 8.299 12.58 8.299 20.131zm28.792-47.631c0 6.893-5.607 12.5-12.5 12.5h-380c-6.893 0-12.5-5.607-12.5-12.5s5.608-12.5 12.5-12.5h380c6.893 0 12.5 5.607 12.5 12.5zm-175-27.5v-122.52c62.159 11.318 111.198 60.306 122.523 122.52z"/><path d="m331.823 104.592c-15.163 0-27.5 12.336-27.5 27.5s12.337 27.5 27.5 27.5 27.5-12.336 27.5-27.5-12.337-27.5-27.5-27.5zm0 40c-6.893 0-12.5-5.607-12.5-12.5s5.607-12.5 12.5-12.5 12.5 5.607 12.5 12.5-5.608 12.5-12.5 12.5z"/><path d="m180.175 104.592c-15.164 0-27.5 12.336-27.5 27.5s12.336 27.5 27.5 27.5 27.5-12.336 27.5-27.5-12.337-27.5-27.5-27.5zm0 40c-6.893 0-12.5-5.607-12.5-12.5s5.607-12.5 12.5-12.5 12.5 5.607 12.5 12.5-5.608 12.5-12.5 12.5z"/></g></g></svg>
    `;
    let svgCodeGuy = `
                    <svg width="200px" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 251.5 430.6" enable-background="new 0 0 251.5 430.6" xml:space="preserve"> <g id="camisacostas"> <path fill="#383838" d="M127.7,186.5c-8.3,0-23.5-7.9-25-13c-0.3-1.1,0.1-2.1,1.2-2.8c2.9-1.8,7.9-2.8,15-2.8 c8.2,0,16.5,1.3,17.5,1.5c0,0.8-0.4,6-3.4,14.4C132.3,185.6,130.6,186.5,127.7,186.5C127.7,186.5,127.7,186.5,127.7,186.5z"/> <path fill="#2D2D2D" d="M118.8,168c8,0,16,1.2,17.4,1.4c-0.1,1.1-0.5,6.1-3.4,14.2c-0.6,1.7-2.3,2.6-5.2,2.6 c-8.3,0-23.4-7.8-24.9-12.9c-0.3-1.1,0.1-2,1.1-2.6C106.8,168.9,111.8,168,118.8,168 M118.8,167.8c-5.8,0-11.7,0.6-15,2.8 c-6.8,4.2,13.5,16,23.9,16c2.7,0,4.7-0.8,5.4-2.7c3.4-9.3,3.4-14.5,3.4-14.5S127.7,167.8,118.8,167.8L118.8,167.8z"/> </g> <g id="antebracos"> <path fill="#D3B39B" d="M177.5,221.6c0,0,3.3,23.5,0,27.7s-14.5,0-16-5.8c-1.5-5.8-1.5-5.8-1.5-5.8s-0.2-6.8,2.9-9.2 c3.1-2.4,3.4-2.7,3.4-2.7L177.5,221.6z"/> <path fill="#D3B39B" d="M62.5,221.6c0,0-3.3,23.5,0,27.7c3.3,4.2,14.5,0,16-5.8c1.5-5.8,1.5-5.8,1.5-5.8s0.2-6.8-2.9-9.2 c-3.1-2.4-3.4-2.7-3.4-2.7L62.5,221.6z"/> </g> <g id="sombras" opacity="0.20"> <path fill="#0A0A0A" d="M1.5,406.1c0-1.2,1.9-1.8,5.4-2.8c6.2-1.8,17.3-4,32-5.3c22.5-2,53.4-2,87.4-3.3c19.6-0.7,41.2,1,58.8,1.9 c39.1,1.9,65.9,5.2,65.9,9.6c0,4.4-26.9,8.2-66.4,10.1c-7.3,0.4-16.1-0.5-24.2-0.3c-11.1,0.3-21.9,1.6-34.1,1.6 c-4.2,0-8.4,0-12.6-0.1c-9.2-0.1-18.1-0.3-26.6-0.5C37.3,415.4,1.5,411.1,1.5,406.1z"/> </g> <g id="cabeca"> <g id="pescoco"> <rect x="105.5" y="147.5" fill="#E1BFA3" width="27" height="47"/> </g> <path opacity="0.1" d="M104.4,172.5c-0.1,4.6,25.5,9.1,29.6-0.5c0,0-1,6.9-2.8,8.3c-1.8,1.3-12,8.5-12,8.5s-12.8-2.9-14.1-7.2 C103.8,177.3,104.4,172.5,104.4,172.5z"/> <g id="orelhas"> <g> <g> <path fill="#E1BFA3" d="M178.5,113.7L178.5,113.7c0-5.3-4-9.2-8.6-9.2h-11.5l-6.2,18.6c0,0.2,9.4,0.4,9.5,0.4h8.2 C174.5,123.5,178.5,118.9,178.5,113.7z"/> </g> <g opacity="6.000000e-002"> <path d="M166,108.8c0,0,1-0.5,2.6-0.5c0.8,0,1.9,0.1,2.9,0.8c0.5,0.3,1,0.8,1.3,1.4c0.1,0.3,0.3,0.6,0.3,0.9 c0.1,0.2,0.1,0.5,0.2,0.8c0.2,1.1,0.2,2.2-0.1,3.3c-0.1,0.5-0.3,1-0.6,1.5c-0.2,0.5-0.6,0.8-0.9,1.1c-0.7,0.6-1.5,0.7-2,0.6 c-0.5,0-0.7-0.1-0.7-0.1c0,0,1.2-0.2,1.9-1.3c0.7-1.1,0.8-3,0.5-4.8c0-0.2-0.1-0.5-0.1-0.7c0-0.2-0.1-0.4-0.2-0.5 c-0.2-0.3-0.3-0.6-0.6-0.9c-0.5-0.5-1.3-0.8-2-1.1C167.1,108.9,166,108.8,166,108.8z"/> </g> </g> <g> <g> <path fill="#E1BFA3" d="M58.5,113.7L58.5,113.7c0-5.3,4-9.2,8.7-9.2h11.5l6.2,18.6c0,0.2-9.4,0.4-9.5,0.4h-8.2 C62.5,123.5,58.5,118.9,58.5,113.7z"/> </g> <g opacity="8.000000e-002"> <path d="M70.3,108.8c0,0-1.1,0.2-2.5,0.6c-0.7,0.2-1.5,0.6-2,1.1c-0.3,0.2-0.4,0.6-0.6,0.9c0,0.2-0.1,0.3-0.2,0.5 c0,0.3-0.1,0.5-0.1,0.7c-0.3,1.8-0.2,3.8,0.5,4.8c0.7,1.1,2,1.2,1.9,1.3c0,0-0.2,0.1-0.7,0.1c-0.5,0-1.3-0.1-2-0.6 c-0.4-0.3-0.7-0.7-0.9-1.1c-0.3-0.4-0.5-0.9-0.6-1.5c-0.3-1.1-0.2-2.2-0.1-3.3c0-0.3,0.1-0.5,0.2-0.8c0.1-0.3,0.2-0.6,0.3-0.9 c0.3-0.6,0.8-1.1,1.3-1.4c1-0.7,2-0.8,2.9-0.8C69.3,108.3,70.3,108.8,70.3,108.8z"/> </g> </g> </g> <g opacity="0.1"> <path d="M104.6,156.7l27.9,1.1v2.2c0,0-20,6-27,3.4v-5.6L104.6,156.7z"/> </g> <g id="queixo"> <path fill="#E1BFA3" d="M73.8,115.3c0-24.9,20.2,6.3,45.1,6.3s45.1-31.2,45.1-6.3s-20.2,45.1-45.1,45.1S73.8,140.2,73.8,115.3z"/> </g> <g id="face"> <path fill="#E1BFA3" d="M163.5,108.9c0,15.3-12.4,27.6-27.6,27.6h-33.7c-15.3,0-27.6-12.4-27.6-27.6V75.1 c0-15.3,12.4-27.6,27.6-27.6h33.7c15.3,0,27.6,12.4,27.6,27.6V108.9z"/> </g> <g id="sombratesta" opacity="0.1"> <path d="M151.8,66.7c0,0-35.1,17.4-63.8,2.1c0,0-10.7,12.6-11.3,13.1C76,82.4,73.1,83,73.1,83l-2.1-8.8l9.1-11.3l4-1.1l41.2,3.2 l26.3,0.2L151.8,66.7z"/> </g> <g id="boca"> <path fill="#CE9A74" d="M127.2,131.5c0,0,0.7,0.6,0.8,2.1c0,0.7-0.1,1.5-0.6,2.3c-0.2,0.4-0.5,0.8-0.9,1.1 c-0.4,0.3-0.8,0.5-1.3,0.8c-0.3,0.1-0.9,0.3-1.4,0.3c-0.5,0-1-0.1-1.4-0.2c-0.9-0.3-1.6-0.8-2-1.3c-0.9-1.1-0.7-2.1-0.8-2.1 c0,0,0.1,0.2,0.4,0.4c0.2,0.3,0.6,0.6,1.1,0.8c0.5,0.3,1,0.4,1.6,0.5c0.3,0,0.6,0,0.9,0c0.3,0,0.5-0.1,0.9-0.2 c0.2-0.1,0.5-0.2,0.8-0.4c0.2-0.2,0.5-0.4,0.7-0.6c0.4-0.4,0.7-1,0.9-1.5c0.2-0.5,0.3-1,0.3-1.3 C127.2,131.8,127.2,131.5,127.2,131.5z"/> </g> <g id="cabelo"> <g id="lados"> <g> <path fill="#6B5947" d="M84.4,67c0,0-5.9,10-9,13.8c0,0,3.9,26.7-1.7,32.6c0,0-0.8-2.4-2.6-5.4c-1.8-3.1-6.5-37.2-4.7-42.3 s6.1-13.8,12-12.8C84.4,54,84.4,67,84.4,67z"/> </g> <g> <path fill="#6B5947" d="M164,114.4l0.1,0.1c0,0,6.8-27.6,6-36.6s-3.3-18.7-5.1-21.7c-1.8-3.1-10.7-5.6-12-2.8 c-1.3,2.8-6.1,9-6.1,9s12.5,12,13,14.8c0.4,2.1,0.5,15.3-0.1,24.2C159.4,106.2,160.9,110.9,164,114.4z"/> </g> <g> <path fill="#3D332D" d="M84.2,65.4c0,0-5.6,11.5-9.6,14c0,0,7.8-12.3,8-14c0.2-1.8,0.2-1.8,0.2-1.8L84.2,65.4z"/> </g> <g> <path fill="#3D332D" d="M73.8,113.5c0,0-3.2-13.9-3.2-15.6c0-1.8,0.2-4.9,0.2-4.9s-1.8,8.3,0,14.2L73.8,113.5z"/> </g> <g> <path fill="#3D332D" d="M162,94.8c0,0-0.2,11,1.4,14.5l0.5-2.7L162,94.8z"/> </g> </g> <g id="franja"> <g> <path fill="#6B5947" d="M72.9,59.6c0,0,33.5,22.5,72.7,7.7c0,0,17.4-1.8,22.3-11.8c0,0-6.1,1-7.2,1c-1,0,4.6-6.7,4.9-16.9 c0.3-10.2-3.3-13.6-3.3-13.6s-5.9,10-10.5,11c0,0,2.6-8.7,2.3-13.3s0-6.1,0-6.1s-8.2,12-36.8,13.8c-28.7,1.8-39.1,3.1-43.2,7.7 c-4.1,4.6-4.1,12.8-3.3,15.6S72.9,59.6,72.9,59.6z"/> </g> <g> <path fill="#3D332D" d="M73.6,55.9c0.2-1.2-2.6-8.1,1.2-11.7c3.8-3.6,15.3-6.9,23.5-7.2c8.1-0.2,29.2-1.7,34.2-3.4 c5-1.7,7.4-3.8,7.4-3.8s-2.6,6.9-37.8,10.3C66.9,43.4,73.6,55.9,73.6,55.9z"/> </g> <g> <path fill="#3D332D" d="M154.7,37.7c0,0-8,7-26,9.3c-18,2.2-24.6,4.9-24.6,4.9s32.5-3.5,34.6-3.7 C140.8,48.1,151.6,47.9,154.7,37.7z"/> </g> <g> <path fill="#3D332D" d="M83.7,57.8c0,0,12,2.9,15.3,2.6c3.4-0.2,9.1-2.2,9.1-2.2S103.1,65.9,83.7,57.8z"/> </g> <g> <path fill="#3D332D" d="M154,17.6c0,0-5.2,12.9-6.7,14.1c-1.4,1.2-4.5,3.8-4.5,3.8s7.7-2.9,9.8-9.1L154,17.6z"/> </g> <g> <path fill="#3D332D" d="M150.7,66.4c0,0,15.1-5.8,17.1-10.9c0,0-19.7,11-22.3,11.8L150.7,66.4z"/> </g> </g> </g> <g id="sobrancelhas"> <g> <path fill="#3D332D" d="M84.6,92c0,0,16.8-9.6,14.2-12.2C96.2,77.2,84.6,92,84.6,92z"/> </g> <g> <path fill="#3D332D" d="M151.5,91.5c0,0-16.8-9.6-14.2-12.2C139.9,76.8,151.5,91.5,151.5,91.5z"/> </g> </g> <g id="nariz"> <path fill="#917B6A" d="M115.1,86.2c0,0-0.1,0.8-0.3,2.2c-0.2,1.4-0.5,3.4-0.8,5.8c-0.4,2.4-0.7,5.2-1.2,8.1c-0.5,3-1,6.1-1.5,9.3 c-0.5,3.2-1,6.3-1.4,9.3c-0.1,0.7-0.2,1.5-0.3,2.2c-0.1,0.7-0.1,1.5-0.1,1.9c0.1,0.4,0.6,0.8,1.1,1.2c0.5,0.3,1.1,0.6,1.6,0.8 c2.2,0.8,4.2,1.3,5.5,1.6c1.4,0.3,2.2,0.5,2.2,0.5s-0.8,0-2.2-0.2c-1.4-0.2-3.4-0.3-5.8-1.1c-0.6-0.2-1.2-0.4-1.8-0.7 c-0.6-0.3-1.3-0.7-1.7-1.7c-0.2-1-0.1-1.6,0-2.4c0.1-0.7,0.1-1.5,0.2-2.2c0.4-3,0.8-6.2,1.3-9.4c0.6-3.2,1.1-6.3,1.6-9.3 c0.6-3,1.2-5.7,1.6-8.1c0.5-2.4,1-4.3,1.3-5.7C114.9,87,115.1,86.2,115.1,86.2z"/> </g> <g id="olhos"> <circle fill="#3D332D" cx="98.4" cy="114" r="2.4"/> <circle fill="#3D332D" cx="136.9" cy="114" r="2.4"/> </g> </g> <g id="camisas"> <path fill="#515151" d="M137.9,174.8c0,0,35.4,13.8,38.3,40.9l-11,11.5c0,0-0.5,67.7,1.9,71.6c0,0-20.1,12.2-33.3,15.1 s-40-2.2-43.1-3.6c-3.1-1.4-15.3-10.8-15.3-10.8s2.6-9.8,2.4-13.9c-0.2-4.1,0.5-27.5,0.2-31.8c-0.2-4.3-1.2-19.9-1.2-19.9 l-15.3-14.4c0,0,7.6-41.2,38.7-42.3c0,0,13,15.5,15.6,15.5s3.1,6.2,3.1,6.2s3.1-6.3,11-15.2C137.9,174.8,137.9,174.8,137.9,174.8z" /> <g> <polygon fill="#353535" points="62.8,220.6 60.2,224.5 77,238.6 77.8,236.8 77.2,233.2 		"/> </g> <g> <polygon fill="#353535" points="165.1,227.1 175.5,216.3 179.3,223.2 165.1,235.8 		"/> </g> <g id="gola"> <g> <path fill="#515151" d="M109,189.8l-0.2-8.2l7.7,0.8l1.9,1.4c0,0,2.3,4.6,2.1,8.8c-0.2,4.1-4.6,5-4.6,5L109,189.8z"/> </g> <g> <path fill="#515151" d="M121.8,182c0,0-5.4,15.2-5.6,23.3l0.5,6.4l8.9,0.2l-1-8.8c0,0,6.7-11,7.7-12 C133.3,190.2,130.1,179.5,121.8,182z"/> </g> <g> <g> <g> <path fill="#515151" d="M109.7,196.7c-4.3-4.1-12.4-18.1-12.5-18.2c0.4-2.1,5.6-7,6.5-7.7c0,0,0,0.1,0.1,0.2 c0.5,0.8,2.8,2.8,3.5,3c0.7,0.1,10.6,6.3,11.4,7.1c0.6,0.6,0.8,4.1,0.9,6c-0.3-0.8-1-2.1-1.2-2.8c-0.2-0.5-0.7-0.8-1.6-0.8 c-1,0-2.5,0.3-4.5,1c-2.8,1-2.7,7.5-2.7,10.7C109.7,195.8,109.7,196.4,109.7,196.7z"/> <path fill="#2D2D2D" d="M103.6,170.9C103.7,170.9,103.7,170.9,103.6,170.9c0.5,0.9,2.8,2.9,3.6,3.1c0.7,0.1,10.6,6.3,11.4,7.1 c0.4,0.4,0.7,3.1,0.8,5.3c-0.3-0.7-0.7-1.7-0.9-2.2c-0.2-0.6-0.8-0.9-1.7-0.9c-1,0-2.6,0.3-4.5,1c-2.9,1-2.8,7.4-2.8,10.8 c0,0.4,0,0.9,0,1.2c-4.1-4.1-11.5-16.7-12.2-17.9C97.9,176.4,102.5,171.8,103.6,170.9 M103.8,170.5c-0.3,0-6.2,5.7-6.7,8 c0,0,8.3,14.4,12.6,18.3c0,0,0,0,0,0c0.4,0-0.9-11,2.7-12.3c2-0.7,3.4-1,4.4-1c0.9,0,1.3,0.2,1.5,0.7c0.3,1,1.4,3.4,1.4,3.4 s-0.2-5.9-1-6.7c-0.8-0.8-10.7-7-11.5-7.2C106.5,173.6,103.6,171,103.8,170.5C103.8,170.5,103.8,170.5,103.8,170.5L103.8,170.5 z"/> </g> </g> </g> <g> <path fill="#353535" d="M129.5,191.6c0,0-5.2-4.5-6.8-4.2c-1.6,0.3-4.2,5.5-4.5,6.2c-0.2,0.7-1,18.7-0.4,20.6l-0.7-0.1 c0,0,0.6-20.3,0.6-21c0.1-0.7,2-5.5,2-5.5l2.1-5.6C121.8,182,129.1,177.8,129.5,191.6z"/> </g> <g> <circle fill="#BCBCBC" cx="121.6" cy="194.2" r="2.2"/> </g> <g> <circle fill="#BCBCBC" cx="121.7" cy="202.3" r="2"/> </g> <g> <g> <g> <path fill="#515151" d="M129.7,199.1c0.2-2.4,0.7-12.4-2.8-16.2c-0.9-0.9-1.9-1.4-3.1-1.4c-0.4,0-0.8,0.1-1.2,0.2 c2.5-1.7,11.3-8,12.6-10.6l1.4-1.7c0.5,0.2,3.5,1.6,7.3,8.3L129.7,199.1z"/> <path fill="#2D2D2D" d="M136.6,169.6c0.7,0.3,3.5,1.9,7.1,8.1l-13.9,20.9c0.2-3,0.4-12.2-2.8-15.8c-0.9-1-2-1.5-3.2-1.5 c-0.2,0-0.5,0-0.7,0c3-2.1,10.8-7.8,12.2-10.3L136.6,169.6 M136.5,169.3l-1.4,1.8c-1.6,3-13.2,11-13.2,11 c0.7-0.2,1.4-0.4,1.9-0.4c7.4,0,5.7,17.9,5.7,17.9l14.5-21.9C139.7,170.2,136.5,169.3,136.5,169.3L136.5,169.3z"/> </g> </g> </g> </g> <g opacity="0.14"> <path d="M78.9,288c0,0-0.7,5.3-1.4,6.9c-0.7,1.7,24.4,11.5,24.4,11.5L78.9,288z"/> </g> </g> <g> <path fill="#E6B99B" d="M43.6,262"/> </g> <path fill="#D3B39B" d="M66.2,245.2c0,0,6.5-6.7,15.8,1c9.2,7.7,2.2,12-4.1,12.7c-6.3,0.7-6.3,0.7-6.3,0.7s-4.2-0.9-7.3-2.2 c-1.9-0.8-3.1-2.7-3.1-4.7l0.1-7L66.2,245.2z"/> <path fill="#E1BFA3" d="M173.3,245.2c0,0-6.5-6.7-15.8,1c-9.2,7.7-2.2,12,4.1,12.7c6.3,0.7,6.3,0.7,6.3,0.7s3.6-1,6.5-2.2 c2.3-0.9,3.8-3.1,3.8-5.6l0-5.5L173.3,245.2z"/> <g id="maos"> <path id="esquerda" fill="#E1BFA3" d="M172.1,262.9c0,0,8.2-4,5.2-10.6s-15.5-14.6-18-13.8c-2.5,0.8-16.7,14-16.5,15.4 s4.6,0.8,5.6,0.4c1-0.4-0.2,0,4.4,3C157.3,260.3,168.1,264.4,172.1,262.9z"/> <path id="direita" fill="#E1BFA3" d="M66.3,251.3c0,0,10.5-9,13-10.2c2.5-1.2,10.6-1.8,12.8-4.6c2.3-2.8,1.7,4-2.5,7 c0,0,8.3,10.5,8.9,13.2c0.7,2.7-4.4,0-4.4,0s-12.3,5.4-13.5,4.8c-1.2-0.6-3,0-3,0s-3.7,1-6-3c-2.3-4-2.3-4-2.3-4L66.3,251.3z"/> </g> <g id="pernas"> <g> <path fill="#212121" d="M15.7,303.3c0,0-1.9-11.2,8-15c9.9-3.8,37,3.2,64.8,18.5c27.8,15.3,69.9-5.1,98-14.7 c28.1-9.6,45.9-10.1,49.3,0.9c0,0-24.7,39.3-45.5,40.6s-48.2-1-48.2-1l-31.9,0.6c0,0-24.3,8.6-28.7,8.3 C77,341.2,20.8,325.3,15.7,303.3z"/> </g> <g> <path fill="#2B2B2B" d="M91.2,333.1c0,0,20.3-12,21.9-11.5c1.6,0.5,6.9,5.9,9.1,6.9c2.2,1,1.6,3.7,1.6,3.7l-3,9.3l-22.3-1.9 L91.2,333.1z"/> </g> <g> <polygon fill="#E1BFA3" points="134.9,341.1 114.3,342 119.9,331 137.6,330.6 136.7,342.2 		"/> </g> <g> <polygon fill="#EAEAEA" points="119,329.9 127.3,330.7 126,342.5 115.4,340.3 		"/> </g> <g id="notebook"> <g> <g> <path fill="#898989" d="M212.5,295.1c0,1.9-1.5,3.4-3.4,3.4H33.9c-1.9,0-3.4-1.5-3.4-3.4v-1.3c0-1.9,1.5-3.4,3.4-3.4h175.3 c1.9,0,3.4,1.5,3.4,3.4V295.1z"/> </g> <g> <path fill="#C1C2C7" d="M212.5,289.7c0,3.8-3,6.8-6.8,6.8H37.3c-3.8,0-6.8-3-6.8-6.8V186.3c0-3.8,3-6.8,6.8-6.8h168.4 c3.8,0,6.8,3,6.8,6.8V289.7z"/> </g> </g> <g id="macae"> </g> </g> <g opacity="0.1"> <polygon points="135.8,341 132.4,341.2 134.8,330.6 136,330.5 		"/> </g> <g> <path fill="#333333" d="M135.7,326.9l-1,27.8c0,0,55.2-2.9,87.4-33.8s2.2-37,2.2-37s-10.2-0.6-10.2,1.3 C214.2,287,191.9,319.9,135.7,326.9z"/> </g> <g> <path fill="#E1BFA3" d="M129.3,349.5c0,0,24.9-2.1,25.4-1.6c0.5,0.5,3.8,8.9,3.8,8.9l-34,1.4c0,0,1.1-5.3,1.8-6.5 C126.9,350.5,129.3,349.5,129.3,349.5z"/> </g> <g> <path fill="#333333" d="M130.9,361c0.9-0.2-1.6-23.3-1.6-23.3s-68.3-5.1-98.3-45.6h0c-1.5-2.9-6.7-5.8-9.3-3.9l-2.3,1 c-8.7,6.3-7.5,19.3-1.7,28.4c3.1,4.8,7.6,10.1,14.3,15.3C53.4,349.5,88.8,368.7,130.9,361z"/> </g> <g opacity="0.1"> <polygon points="150.4,357.3 145.7,357.4 146.8,348 149.4,351.4 		"/> </g> <g> <polygon fill="#EAEAEA" points="157.2,358.6 149.4,357.8 146.4,347.8 155.8,347.3 		"/> </g> <g id="pe"> <g> <path fill="#2B2B2B" d="M150.9,347c-0.7-0.5,12.3-10.4,13.4-10.2c1.1,0.2,11.6,9.4,12.8,9.4c1.1,0,27.8,8.5,25.2,16.4l-25.5-0.6 l-19.9-1.1C156.8,360.9,155.3,350.7,150.9,347z"/> </g> <g> <rect x="161.9" y="353.5" transform="matrix(0.9869 0.1612 -0.1612 0.9869 59.7596 -21.5769)" fill="#777070" width="1.9" height="7.9"/> </g> <g> <rect x="165.3" y="353.9" transform="matrix(0.9821 0.1884 -0.1884 0.9821 70.3837 -24.9184)" fill="#777070" width="1.9" height="7.6"/> </g> <g> <rect x="168.4" y="354.8" transform="matrix(0.9989 4.593970e-002 -4.593970e-002 0.9989 16.6397 -7.4027)" fill="#777070" width="1.9" height="7"/> </g> <g> <rect x="171.7" y="355.6" transform="matrix(0.9914 0.1308 -0.1308 0.9914 48.3763 -19.4954)" fill="#777070" width="1.9" height="6.1"/> </g> </g> <g> <path fill="#E6B99B" d="M133,342.9"/> </g> </g> </svg>
    `;
    let svgParchment = `
        <svg xmlns="http://www.w3.org/2000/svg" height="512pt" viewBox="0 -163 512 512" width="512pt"><path d="m256 57.53125c-78.738281 0-149.746094-8.453125-201.007812-22.015625-8.460938-2.238281-17.710938-.894531-24.402344 4.75-13.640625 11.507813-23.089844 36.449219-23.089844 65.363281 0 28.910156 9.449219 53.851563 23.089844 65.359375 6.691406 5.644531 15.941406 6.988281 24.402344 4.746094 51.261718-13.558594 122.269531-22.011719 201.007812-22.011719 82.605469 0 156.707031 9.304688 208.417969 24.046875v-144.289062c-51.710938 14.746093-125.8125 24.050781-208.417969 24.050781zm0 0" fill="#f4dbb3"/><path d="m260.921875 137.691406c-93.34375 0-177.914063 7.664063-240.910156 20.097656 3.109375 5.332032 6.640625 9.878907 10.578125 13.199219 6.691406 5.644531 15.941406 6.988281 24.402344 4.746094 51.261718-13.558594 122.269531-22.011719 201.007812-22.011719 82.605469 0 156.707031 9.304688 208.417969 24.046875v-26.421875c-57.441407-8.578125-127.5625-13.65625-203.496094-13.65625zm0 0" fill="#eac89f"/><path d="m231.953125 105.628906c0-26.566406 14.496094-48.144531 32.203125-48.144531l-32.203125-.238281c-17.710937 0-32.066406 21.816406-32.066406 48.382812 0 26.5625 14.617187 48.355469 32.324219 48.355469l31.804687-.261719c-17.707031 0-32.0625-21.53125-32.0625-48.09375zm0 0" fill="#ff8086"/><path d="m231.953125 153.722656h32.0625c-17.707031 0-32.0625-21.535156-32.0625-48.097656h-32.066406c0 26.566406 14.355469 48.097656 32.066406 48.097656zm0 0" fill="#db4655"/><path d="m504.5 105.628906c0-39.847656-17.945312-72.148437-40.082031-72.148437s-40.078125 32.300781-40.078125 72.148437c0 39.84375 17.941406 72.144532 40.078125 72.144532s40.082031-32.300782 40.082031-72.144532zm0 0" fill="#d2af8c"/><path d="m239.96875 105.628906c0 13.28125-10.769531 24.046875-24.050781 24.046875s-24.046875-10.765625-24.046875-24.046875 10.765625-24.050781 24.046875-24.050781 24.050781 10.769531 24.050781 24.050781zm0 0" fill="#ff9a9f"/><path d="m435.472656 125.667969c0-17.984375 5.0625-33.84375 12.761719-43.207031 2.933594-3.566407.699219-8.898438-3.921875-8.898438h-15.757812c-2.675782 9.667969-4.21875 20.53125-4.21875 32.066406 0 39.84375 17.945312 72.144532 40.082031 72.144532-15.984375 0-28.945313-23.328126-28.945313-52.105469zm0 0" fill="#eac89f"/><path d="m464.417969 33.480469c-11.316407 0-21.519531 8.480469-28.808594 22.058593 4.394531-2.980468 9.136719-4.6875 14.113281-4.6875 22.136719 0 40.082032 32.300782 40.082032 72.144532 0 19.472656-4.308594 37.109375-11.273438 50.085937 15.164062-10.285156 25.96875-36.566406 25.96875-67.453125 0-39.847656-17.945312-72.148437-40.082031-72.148437zm0 0" fill="#eac89f"/><path d="m464.417969 25.980469c-3.527344 0-6.953125.617187-10.242188 1.78125-7.0625 2.503906-14.351562 4.292969-21.679687 5.847656-42.046875 8.921875-93.300782 14.515625-147.199219 16.011719 5.269531-2.953125 10.039063-6.164063 13.335937-9.460938 9.175782-9.175781 9.175782-24.105468 0-33.28125-9.175781-9.171875-24.105468-9.171875-33.28125 0-6.585937 6.589844-12.824218 19.015625-17.367187 29.660156-4.546875-10.644531-10.785156-23.070312-17.371094-29.660156-9.175781-9.171875-24.105469-9.171875-33.28125 0-9.171875 9.175782-9.171875 24.105469 0 33.28125 4.515625 4.511719 11.769531 8.859375 19.3125 12.613282-9.074219 4.574218-16.578125 14.652343-20.78125 28.515624-7.015625 5.792969-11.496093 14.550782-11.496093 24.335938s4.480468 18.542969 11.492187 24.335938c2.070313 6.832031 4.929687 12.738281 8.382813 17.519531-59.800782 2.929687-115.335938 10.863281-157.527344 22.746093-15.480469-.925781-31.714844-26.636718-31.714844-64.597656 0-37.957031 16.230469-63.667968 31.710938-64.601562 37.226562 10.488281 84.429687 17.9375 136.628906 21.546875.175781.011719.351562.019531.523437.019531 4.046875 0 7.4375-3.25 7.492188-7.414062.054687-4.03125-3.265625-7.3125-7.289063-7.589844-51.601562-3.585938-98.082031-10.957032-134.429687-21.320313-.0625-.019531-1.292969-.269531-2.480469-.269531-26.476562.371094-47.15625 35.203125-47.15625 79.628906 0 44.421875 20.683594 79.257813 47.160156 79.625 1.441406 0 2.417969-.253906 2.476563-.269531 52.960937-15.101563 128.175781-23.761719 206.363281-23.761719 65.386719 0 128.6875 6.0625 178.636719 16.878906 6.558593 1.421876 13.078125 3.078126 19.398437 5.335938 2.734375.980469 5.558594 1.570312 8.457032 1.753906.636718.054688 1.28125.082032 1.925781.082032 26.683593 0 47.582031-34.984376 47.582031-79.648438 0-44.660156-20.898438-79.644531-47.582031-79.644531zm-188.457031-8.492188c1.664062-1.664062 3.847656-2.496093 6.03125-2.496093 2.1875 0 4.371093.832031 6.035156 2.496093 3.328125 3.324219 3.328125 8.738281 0 12.066407-5.152344 5.152343-16.882813 10.824218-27.164063 15.09375 4.269531-10.28125 9.945313-22.011719 15.097657-27.160157zm-68.019532 12.066407c-3.328125-3.328126-3.328125-8.742188 0-12.066407s8.738282-3.328125 12.066406 0c5.152344 5.152344 10.828126 16.886719 15.097657 27.164063-10.277344-4.265625-22.003907-9.9375-27.164063-15.097656zm-8.570312 76.074218c0-9.125 7.421875-16.550781 16.546875-16.550781s16.550781 7.425781 16.550781 16.550781-7.425781 16.546875-16.550781 16.546875-16.546875-7.421875-16.546875-16.546875zm30.734375 40.914063c-5.949219 0-11.085938-3.699219-14.722657-9.382813.179688.003906.355469.015625.539063.015625 4.792969 0 9.339844-1.082031 13.417969-3.003906 1.710937 4.59375 3.816406 8.703125 6.242187 12.25-1.828125.035156-3.652343.078125-5.476562.121094zm-.757813-69.457031c-4.074218-1.925782-8.628906-3.007813-13.425781-3.007813-.175781 0-.347656.011719-.523437.011719 3.644531-5.671875 9.101562-9.371094 14.675781-9.371094 1.835937.042969 3.683593.078125 5.53125.113281-2.433594 3.550781-4.539063 7.664063-6.257813 12.253907zm201.113282 84.828124c-48.671876-9.847656-108.46875-15.429687-170.191407-15.679687-.085937 0-.171875-.011719-.261719-.011719-7.375 0-14.6875-9.128906-18.265624-22.503906 3.601562-5.125 5.726562-11.363281 5.726562-18.09375 0-6.726562-2.125-12.964844-5.726562-18.089844 3.574218-13.339844 10.949218-22.507812 18.269531-22.507812.089843 0 .179687-.007813.273437-.011719 61.71875-.25 121.511719-5.832031 170.179688-15.679687-8.460938 14.308593-13.625 34.101562-13.625 56.289062s5.160156 41.980469 13.621094 56.289062zm1.625-64.183593c.363281-5.929688 1.132812-11.5 2.230468-16.667969h5.683594c-3.214844 4.695312-5.902344 10.332031-7.914062 16.667969zm32.332031 72.542969c-10.144531 0-21.445313-18.320313-21.445313-44.605469 0-26.285157 11.300782-44.605469 21.445313-44.605469 4.144531 0 7.5-3.359375 7.5-7.5s-3.355469-7.5-7.5-7.5h-25.59375c6.363281-15.765625 16.175781-25.082031 25.59375-25.082031 15.734375 0 32.582031 25.976562 32.582031 64.644531 0 38.671875-16.847656 64.648438-32.582031 64.648438zm0 0"/></svg>
    `;

    let svgZoom = `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 489.3 489.3" style="enable-background:new 0 0 489.3 489.3;" xml:space="preserve"> <g> <g> <path d="M476.95,0H12.35c-6.8,0-12.2,5.5-12.2,12.2V235c0,6.8,5.5,12.2,12.2,12.2s12.3-5.5,12.3-12.2V24.5h440.2v440.2h-211.9 c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h224c6.8,0,12.3-5.5,12.3-12.3V12.3C489.25,5.5,483.75,0,476.95,0z"/> <path d="M0.05,476.9c0,6.8,5.5,12.3,12.2,12.3h170.4c6.8,0,12.3-5.5,12.3-12.3V306.6c0-6.8-5.5-12.3-12.3-12.3H12.35 c-6.8,0-12.2,5.5-12.2,12.3v170.3H0.05z M24.55,318.8h145.9v145.9H24.55V318.8z"/> <path d="M222.95,266.3c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l138.6-138.7v79.9c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3 V98.1c0-6.8-5.5-12.3-12.3-12.3h-109.5c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h79.9L222.95,249 C218.15,253.8,218.15,261.5,222.95,266.3z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
    `;

    let viking = document.querySelector('.viking');
    let codeGuy = document.querySelector('.code-guy');
    let parchment = document.querySelector('.parchment');
    let ZoomInput = document.querySelector('.zoom-input');

    viking != undefined ? viking.innerHTML = svgViking : null ;
    codeGuy != undefined ? codeGuy.innerHTML = svgCodeGuy : null ;
    parchment != undefined ? parchment.innerHTML = svgParchment : null ;
    ZoomInput != undefined ? ZoomInput.innerHTML = svgZoom : null ;

}

export {
    WorkItems
};