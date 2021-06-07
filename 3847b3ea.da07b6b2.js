(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var i=n(3),a=n(7),r=(n(0),n(81)),l=["components"],o={id:"setup",title:"Technical Setup",sidebar_label:"Technical Setup"},c={unversionedId:"setup",id:"setup",isDocsHomePage:!1,title:"Technical Setup",description:"Basic Setup",source:"@site/docs/setup.md",slug:"/setup",permalink:"/doc/setup",version:"current",sidebar_label:"Technical Setup",sidebar:"docs",previous:{title:"RISE Language Documentation",permalink:"/doc/"},next:{title:"A tutorial of the RISE language, and the Shine compiler",permalink:"/doc/tutorial"}},b=[{value:"Basic Setup",id:"basic-setup",children:[]},{value:"Configuring IntelliJ",id:"configuring-intellij",children:[]},{value:"Installing Dependencies",id:"installing-dependencies",children:[{value:"Docker Image",id:"docker-image",children:[]},{value:"On Debian:",id:"on-debian",children:[]},{value:"On NixOS:",id:"on-nixos",children:[]}]},{value:"Running the Tests",id:"running-the-tests",children:[]}],p={toc:b};function s(e){var t=e.components,n=Object(a.a)(e,l);return Object(r.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"basic-setup"},"Basic Setup"),Object(r.b)("p",null,"Prerequisites: ",Object(r.b)("a",{parentName:"p",href:"https://git-scm.com/"},Object(r.b)("inlineCode",{parentName:"a"},"git")),", ",Object(r.b)("a",{parentName:"p",href:"https://openjdk.java.net/install/"},Object(r.b)("inlineCode",{parentName:"a"},"Java 8+ SDK")),", ",Object(r.b)("a",{parentName:"p",href:"https://www.scala-sbt.org/"},Object(r.b)("inlineCode",{parentName:"a"},"sbt")),", ",Object(r.b)("a",{parentName:"p",href:"https://www.khronos.org/opencl/"},Object(r.b)("inlineCode",{parentName:"a"},"OpenCL"))),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"#installing-dependencies"},"See more details on installing the dependencies below"),"."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Clone the ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rise-lang/shine"},Object(r.b)("inlineCode",{parentName:"a"},"shine"))," repository to a directory of your choice that we call ",Object(r.b)("inlineCode",{parentName:"li"},"$SHINE_ROOT"),"."),Object(r.b)("li",{parentName:"ol"},"In ",Object(r.b)("inlineCode",{parentName:"li"},"$SHINE_ROOT"),", run ",Object(r.b)("inlineCode",{parentName:"li"},"setup.sh")," to download all required submodules."),Object(r.b)("li",{parentName:"ol"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"sbt compile")," (perform this steps even if you want to use IDEA IntelliJ, because IntelliJ does not execute all subproject dependencies correctly that are required for an initial setup)."),Object(r.b)("li",{parentName:"ol"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"sbt test"),".")),Object(r.b)("h2",{id:"configuring-intellij"},"Configuring IntelliJ"),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Download IDEA IntelliJ (",Object(r.b)("a",{parentName:"li",href:"http://www.jetbrains.com/idea/"},"http://www.jetbrains.com/idea/"),") and choose to install the Scala Plugin during setup."),Object(r.b)("li",{parentName:"ol"},"Launch IntelliJ. From the menu choose ",Object(r.b)("inlineCode",{parentName:"li"},"File")," -> ",Object(r.b)("inlineCode",{parentName:"li"},"Open..."),". Then, select ",Object(r.b)("inlineCode",{parentName:"li"},"$SHINE_ROOT")," and press ",Object(r.b)("inlineCode",{parentName:"li"},"OK"),"."),Object(r.b)("li",{parentName:"ol"},"From the menu bar choose ",Object(r.b)("inlineCode",{parentName:"li"},"Run")," -> ",Object(r.b)("inlineCode",{parentName:"li"},"Edit Configurations..."),". Under ",Object(r.b)("inlineCode",{parentName:"li"},"Templates")," choose ",Object(r.b)("inlineCode",{parentName:"li"},"ScalaTest")," and add the following line to ",Object(r.b)("inlineCode",{parentName:"li"},"VM parameters"),": ",Object(r.b)("inlineCode",{parentName:"li"},"-Djava.library.path=lib/executor/lib/Executor/build -Xss26m")," (this will tell IntelliJ where to find the Executor library and use 26MB of thread stack size which is needed for arithmetic simplifactions sometimes).")),Object(r.b)("h2",{id:"installing-dependencies"},"Installing Dependencies"),Object(r.b)("h3",{id:"docker-image"},"Docker Image"),Object(r.b)("p",null,"You can find the build file for a Docker image here:\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/michel-steuwer/docker-scala-opencl"},"https://github.com/michel-steuwer/docker-scala-opencl")),Object(r.b)("p",null,"Note that AMD's SDK is stored with ",Object(r.b)("inlineCode",{parentName:"p"},"git lfs"),", so you will have to download it after checking out the repository."),Object(r.b)("h3",{id:"on-debian"},"On Debian:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Install Portable OpenCL: ",Object(r.b)("inlineCode",{parentName:"li"},"apt-get install pocl")),Object(r.b)("li",{parentName:"ol"},"Install the build dependencies:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"apt-get install cmake software-properties-common g++ clang-7 libxtst6 libxrender1 libxext6\nln -s /usr/bin/clang-7 /usr/bin/clang\nln -s /usr/bin/clang-cpp-7 /usr/bin/clang++\n")))),Object(r.b)("h3",{id:"on-nixos"},"On NixOS:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Add ",Object(r.b)("inlineCode",{parentName:"li"},"pkgs.intel-ocl")," to ",Object(r.b)("inlineCode",{parentName:"li"},"hardware.opengl.extraPackages")," and ",Object(r.b)("inlineCode",{parentName:"li"},"nixos-rebuild"),".\nRunning ",Object(r.b)("inlineCode",{parentName:"li"},"nix-shell -p clinfo --run clinfo")," should show OpenCL support."),Object(r.b)("li",{parentName:"ol"},"You will need ",Object(r.b)("inlineCode",{parentName:"li"},"sbt"),", ",Object(r.b)("inlineCode",{parentName:"li"},"cmake")," and ",Object(r.b)("inlineCode",{parentName:"li"},"gcc")," to compile the project: ",Object(r.b)("inlineCode",{parentName:"li"},"nix-env -iA nixos.sbt nixos.cmake nixos.gcc"),"."),Object(r.b)("li",{parentName:"ol"},"You will need ",Object(r.b)("inlineCode",{parentName:"li"},"clang")," to run some of the tests, however some utilities clash with ",Object(r.b)("inlineCode",{parentName:"li"},"gcc"),"s, so we need to:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"nix-env --set-flag priority 15 gcc-wrapper # give gcc less priority\nnix-env -iA nixos.clang                    # install clang\n"))),Object(r.b)("li",{parentName:"ol"},"Help ",Object(r.b)("inlineCode",{parentName:"li"},"FindOpenCL")," find the OpenCL library in NixOS:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"export LD_LIBRARY_PATH=\"${nix-build '<nixos>' --no-build-output ocl-icd}/lib/:$LD_LIBRARY_PATH\"\nsbt compile\n")),"(From now on ",Object(r.b)("inlineCode",{parentName:"li"},"sbt compile")," does not need to be told where the OpenCL bindings are.)"),Object(r.b)("li",{parentName:"ol"},"We can now run the tests with ",Object(r.b)("inlineCode",{parentName:"li"},"sbt test"),".")),Object(r.b)("h2",{id:"running-the-tests"},"Running the Tests"),Object(r.b)("p",null,"You can run the test suite with ",Object(r.b)("inlineCode",{parentName:"p"},"sbt test"),".\nYou can run subsets or specific tests using ",Object(r.b)("inlineCode",{parentName:"p"},"testOnly"),", e.g., ",Object(r.b)("inlineCode",{parentName:"p"},'sbt "testOnly rise.*"')," to run all the RISE tests, or ",Object(r.b)("inlineCode",{parentName:"p"},'sbt "testOnly rise.elevate.circularBuffering"')," to run that specific test.\nYou can output debugging information generated by the tests by setting the ",Object(r.b)("inlineCode",{parentName:"p"},"RISE_LOG_LEVEL")," environment variable to ",Object(r.b)("inlineCode",{parentName:"p"},"debug"),": ",Object(r.b)("inlineCode",{parentName:"p"},'RISE_LOG_LEVEL=debug sbt "testOnly rise.*"'),"."))}s.isMDXComponent=!0},81:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=i,m=s["".concat(l,".").concat(u)]||s[u]||d[u]||r;return n?a.a.createElement(m,o(o({ref:t},b),{},{components:n})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var b=2;b<r;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);