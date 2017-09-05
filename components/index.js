import { h } from 'preact';

export default function App () {
  return (
    <div>
      <div class="section" style="z-index:10">

        <h1 id="main-title"> <img src="//github.com/bogas04.png" alt="👳🏽" /> Divjot Singh </h1>
        <p style="font-size: 170%; width: 70%; ">
          Sick <a class="orange" target="_blank" href="//wikipedia.org/wiki/Sikhism">Sikh</a>
          trying some Sick <a class="red" href="#code">Technologies</a>
        </p>

      </div>
      {/*<!-- Section Ends -->*/}

      <div class="section yellow" style="z-index:11" id="education">

        <h3> Much Education </h3>

        <div class="container-fluid">

          <div class="row card">
            <div class="card-title">Professionally Me</div>
            <dl class="dl-horizontal">
              <dt>Links</dt> <dd> <a target="_blank" href="//linkedin.com/in/divjot"> LinkedIn </a> | <a target="_blank" href="CV.pdf">CV</a> | <a target="_blank" href="//github.com/bogas04"> GitHub </a> </dd>
              <dt>Programming Languages:</dt> <dd> C, JavaScript, PHP, Java</dd>
              <dt>Stacks/Technologies:</dt> <dd> NodeJS, ExpressJS, Slim MicroFramework, BootStrap, AngularJS, ReactJS, Redux</dd>
              <dt>Databases</dt> <dd>PostgreSQL, MySQL, MongoDB</dd>
              <dt>Tools</dt> <dd>Vim, Eclipse, npm, git, heroku, grunt, gulp, webpack, bower</dd>
              <dt>IDK what to call these:</dt> <dd>HTML, CSS, XML, YAML, Stylus</dd>
            </dl>
          </div>
          {/* <!-- Row Ends --> */}

          <div class="row card">
            <div class="card-title"><a target="_blank" href="//nsit.ac.in/">Netaji Subhas Institute of Technology</a></div>
            <dl class="dl-horizontal">
              <dt>Batch: </dt> <dd> 2012 - 2016 </dd>
              <dt>Percentage: </dt> <dd> 79.48 <small>5<sup>th</sup> position in department</small></dd>
              <dt>Majored In: </dt> <dd> Computer Engineering </dd>
              <dt>Achievements: </dt>
              <dd>
                <ul>
                  <li>Granted merit scholarship for all four years.</li>
                  <li>Consistently stood in top 10%.</li>
                  <li>Mentored class of 30 in an IEEE NSIT SIG for Web Development and Design</li>
                  <li>Report on <a href="Rapes.pdf">Rapes</a></li>
                  <li>Successfully completed projects like :
                <a target="_blank" href="//github.com/bogas04/collnet">CollNet</a> |
                <a target="_blank" href="//github.com/bogas04/cloudkeeper">CloudKeeper</a> |
                <a target="_blank" href="//github.com/bogas04/Attendance-System">Student Attendance System</a>, and more...
              </li>
                  <li>Working on a research project under Vidhi Khanduja (Assistant Professor) on a database watermarking scheme.</li>
                </ul>
              </dd>
              <dt>Societies: </dt>
              <dd>
                <ul>
                  <li> <a target="_blank" href="//ieeensit.org">IEEE NSIT</a> - Web Developer</li>
                  <li> <a target="_blank" href="//junoonnsit.com">Junoon - The Official Photography Club</a> - Core Member</li>
                  <li> <a target="_blank" href="//collegespace.in">CollegeSpace</a> - Tech Head </li>
                </ul>
              </dd>
            </dl>
          </div>
          {/* <!-- Row Ends --> */}

          <div class="row card">
            <div class="card-title"><a target="_blank" href="//www.stmarysschooldwarka.in/">St. Mary's School</a></div>
            <dl class="dl-horizontal">
              <dt>Batch: </dt> <dd> 2002- 2012 </dd>
              <dt>Board: </dt> <dd> CBSE </dd>
              <dt>12<sup>th</sup> Percentage: </dt> <dd> 95.2 </dd>
              <dt>10<sup>th</sup> CGPA: </dt> <dd> 9.8 </dd>
              <dt>Achievements: </dt>
              <dd>
                <ul>
                  <li>Granted merit scholarship for 10<sup>th</sup> - 12<sup>th</sup></li>
                  <li>Topped Science department in 12<sup>th</sup> Grade</li>
                </ul>
              </dd>
            </dl>
          </div>
          {/* <!-- Row Ends --> */}

        </div>
      </div>
      {/*<!-- Section Ends-->*/}

      <div class="section red" style="z-index:12" id="code">

        <h3> Such Work </h3>

        <div class="container-fluid">

          <div class="row card">
            <div class="card-title">Software Developer, <a target="_blank" href="http://www.samsung.com/in/aboutsamsung/samsungelectronics/india/rnd.html">Samsung R&D Institue, Bangalore</a> </div>
            <dl class="dl-horizontal">
              <dt>Duration: </dt> <dd>June 2016 - Present</dd>
              <dt>Team: </dt> <dd><a href="https://twitter.com/SamsungInternet" target="_blank">@SamsungInternet</a> team</dd>
            </dl>
          </div>
          {/* <!-- Row Ends --> */}

          <div class="row card">
            <div class="card-title">Fullstack JavaScript Developer, <a target="_blank" href="http://chefsbasket.com">Fizzy Food Lab's, Mumbai</a> </div>
            <dl class="dl-horizontal">
              <dt>Duration: </dt> <dd>December 2015 - January 2015 ( 1 Month )</dd>
              <dt>Description: </dt>
              <dd>
                <ul>
                  <li>Developed an <a href="http://chefsbasket.herokuapp.com" target="_blank">SPA</a> using ReactJS, NodeJS and Postgresql</li>
                </ul>
              </dd>
            </dl>
          </div>
          {/* <!-- Row Ends --> */}

          <div class="row card">
            <div class="card-title">Student Trainee, <a target="_blank" href="//www.samsung.com/in/sri-b/siso.html">Samsung Research Institute, Bangalore</a> </div>
            <dl class="dl-horizontal">
              <dt>Duration: </dt> <dd>June 2015 - August 2015 ( 2 Months )</dd>
              <dt>Description: </dt>
              <dd>
                <ul>
                  <li>Developed tile based map server using NodeJS, mapnik and TileMill</li>
                  <li>Set up Mongodb cluster (3 systems), developed scripts to convert data from mongodb
                to CSVs and CSVs to JSON to-and-from a Hadoop cluster, and a web app to display
                results of the road anlaysis done by Hadoop.</li>
                </ul>
              </dd>
            </dl>
          </div>
          {/* <!-- Row Ends --> */}

          <div class="row card">
            <div class="card-title">Product Developer, <a target="_blank" href="//refiral.com">Refiral</a></div>
            <dl class="dl-horizontal">
              <dt>Duration: </dt> <dd>October 2013 - October 2014 ( 1 Year )</dd>
              <dt>Description: </dt>
              <dd>
                Co-founding team member. Managed JavaScript head of the tool.
            <ul>
                  <li>Health Report tool for analyzes all clients statistically and constantly check for API health status, hence benefiting in tracking downtimes and losses.</li>
                  <li>Performance improvements by deploying faster routes to server calls. (300-400ms win)</li>
                  <li>Expanding support to several e-commerce platforms. </li>
                  <li>Extending help in creating the internal API. Made its use to make several customizable popouts, providing more options than industry. </li>
                  <li>Integration with social networks to enable the tool. Studied Facebook documentations to leverage best out of its Graph API.</li>
                  <li>Helped in strategy and planning of the tool in its initial phase.</li>
                </ul>
              </dd>
            </dl>
          </div>
          {/* <!-- Row Ends --> */}
          <div class="row card">
            <div class="card-title">Frontend Development Intern, <a target="_blank" href="//frrole.com">Frrole</a></div>
            <dl class="dl-horizontal">
              <dt>Duration: </dt> <dd>November 2013 - January 2014 ( 3 Months )</dd>
              <dt>Description: </dt>
              <dd>Buzzometer - Created an interactive and responsive web app using the APIs of Frrole
            using jQuery , PHP and XML for analyzing the buzz created by a particular movie.</dd>
            </dl>
          </div>
          {/* <!-- Row Ends --> */}

          <div class="row card">
            <div class="card-title">And much more, meet up for a &#9749; coffee if my work interests you</div>
          </div>
        </div>
      </div>
      {/*<!-- Section Ends-->*/}

      <div class="section blue" style="z-index:13">
        <h3> Very Social </h3>
        <div class="container-fluid">


          <div class="row">
            <div class="col-md-4 text-center">
              <p class="card-title"> Find me on <a target="_blank" href="//twitter.com/bogas04">Twitter</a> </p>
              {/* <!-- TWITTER WIDGET --> */}
              <a class="twitter-timeline" target="_blank" href="//twitter.com/bogas04" data-widget-id="384610708496723968">Tweets by @bogas04</a>
            </div>

            <div class="col-md-4 text-center">
              <p class="card-title"> Find me on <a target="_blank" href="//instagram.com/bogas04">Instagram</a> </p>
              <div id="instagram-widget">
                <script src="http://lightwidget.com/widgets/lightwidget.js"></script>
                <iframe src="http://lightwidget.com/widgets/042b4bb9c58d54e69b8dcc22d296f3a6.html" id="lightwidget_042b4bb9c5" name="lightwidget_042b4bb9c5" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width: 100%; border: 0; overflow: hidden;"></iframe>
              </div>
            </div>

            <div class="col-md-4 text-center">
              <div class="card-title"> Find Me on <a target="_blank" href="//youtube.com/divjotbogas">YouTube</a>,
              <a target="_blank" href="//facebook.com/bogas04">Facebook</a> etc.</div>
              <div class="g-ytsubscribe" data-channel="DivjotBogas" data-layout="full" data-theme="dark" data-count="default"></div>
              <div id="fb-root"></div>
              <hr />
              <div class="fb-follow" data-href="//www.facebook.com/bogas04" data-layout="button_count" data-show-faces="true"></div>
            </div>

          </div>
          {/* <!-- Container Ends --> */}
        </div>
        {/* <!-- Row Ends --> */}
      </div>
      {/* <!-- Section Ends --> */}

      <div class="section green text-center" style="z-index: 14">
        <h2> I <span class="glyphicon glyphicon-heart red"> </span> Java Script</h2>
        <h3> Technology </h3>
        <h4> Unix </h4>
        <h5> Vim </h5>
        <h6> &#127829; </h6>

        <noscript>
          <div class="statcounter">
            <a title="web stats" href="//statcounter.com/free-web-stats/" target="_blank">
              <img class="statcounter" src="//c.statcounter.com/10571971/0/952925b7/1/" alt="web stats" />
            </a>
          </div>
        </noscript>
        <script src="js/website.js"></script>
        {/* <!-- Section Ends --> */}
      </div>
    </div>
  );
}