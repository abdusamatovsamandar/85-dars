import SectionHeader from "./components/SectionHeader"
import Category from "./components/Category"
import Course from "./components/Course"

const App = () => {
  return (
    <div>
      <div className="bg-[#F1F2F6]" >
        <div className="container max-w-7xl pt-4 pb-20">
          <SectionHeader title={"Top kategoriyalar"} button={"Barchasi"} />
          <ul className="flex flex-wrap justify-between gap-10">
            <Category image="src/assets/monitor.svg" title={"Dasturlash"}/>
            <Category image="src/assets/design.svg" title={"Dizayn"}/>
            <Category image="src/assets/portfel.svg" title={"Biznes"}/>
            <Category image="src/assets/coins.svg" title={"Buxgalteriya"}/>
            <Category image="src/assets/chart-line.svg" title={"Marketing"}/>
            <Category image="src/assets/medal.svg" title={"Menejment"}/>
            <Category image="src/assets/secure.svg" title={"Hafsizlik"}/>
            <Category image="src/assets/heartbeat.svg" title={"Salomatlik'"}/>
          </ul>
        </div>

        <div className="container max-w-7xl py-4">
          <SectionHeader title={"Barcha kurslar"} button={"BARCHASI"} />

          <ul className="flex flex-wrap justify-between gap-8">
            <Course 
              title={"JAVA"} 
              assigment={"128 ta"} 
              part={"38 ta"} 
              description={"Java - silno tipirovannyy obyektno orientirovann yysag yazyk programmirovaniya, razrabotannyy kompaniey Sun Microsystems. V nastoyashchee vremya proekt matlenejit OpenSource i rasprof ranya yaetsya po litsenzii GPL. V OpenJDK vnosyat vklad krupnye kompanii, sochi kak - Oracle, RedHat, IBM, Google"}
              
            />

            <Course 
              title={"PYTHON"} 
              assigment={"122 ta"} 
              part={"13 ta"} 
              description={"Python - vysokourovnevyy yazyk programirovaniya obshchego naznacheniya, orientirovannyy na povyshenie proizvoditelnosti razrabotchika i chitaemosti koda. Syntaxxd Python minimalis tichen. V toni vremya standartnaya biblioteka vklyuchaet bolshoy ob'yom poleznyx fonksiyont"}
              
            />

            <Course   
              title={"JAVA"} 
              assigment={"122 ta"} 
              part={"13 ta"} 
              description={"Go - kompilyumemyy multilogo yazyk programmovaniya, razrabotannyy vnutri kompanii Google. Razrabotka Go nachalas v sentabr 2007 goda, ego neposredstvennym projektirovaniem zanima lis Robert Grizmer, Rob Pikk i Ken Thompson, zanimavshiesya do etogo proektom razrabotki "}
              
            />
          </ul>
        </div>
      </div>



    </div>
  )
}

export default App
