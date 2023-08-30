import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { CupEventComponent } from "./components/cup-event/cup-event.component";
import { ScoreComponent } from "./components/score/score.component";
import { NewsComponent } from "./components/news/news.component";
import { StatsComponent } from "./components/stats/stats.component";
import { BlogComponent } from "./components/blog/blog.component";
import { NewsInfoComponent } from "./components/news-info/news-info.component";
import { ArticleComponent } from "./components/article/article.component";
import { MatchesComponent } from "./components/matches/matches.component";
import { PlayersComponent } from "./components/players/players.component";
import { InformationsComponent } from "./components/informations/informations.component";
import { AddPlayerComponent } from "./components/add-player/add-player.component";
import { AddMatchComponent } from "./components/add-match/add-match.component";
import { AddTeamComponent } from "./components/add-team/add-team.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { TeamTableComponent } from "./components/team-table/team-table.component";
import { MatchsTableComponent } from "./components/matchs-table/matchs-table.component";
import { PlayersTableComponent } from "./components/players-table/players-table.component";
import { MatchInfoComponent } from "./components/match-info/match-info.component";
import { PlayerInfoComponent } from "./components/player-info/player-info.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BannerComponent } from "./components/banner/banner.component";
import { EditMatchComponent } from "./components/edit-match/edit-match.component";
import { EditPlayerComponent } from "./components/edit-player/edit-player.component";
import { EditTeamComponent } from "./components/edit-team/edit-team.component";
import { AsterixPipe } from "./pipes/asterix.pipe";
import { ReversePipe } from "./pipes/reverse.pipe";
import { SearchComponent } from "./components/search/search.component";
import { AddStadiumComponent } from "./components/add-stadium/add-stadium.component";
import { StadiumTableComponent } from "./components/stadium-table/stadium-table.component";
import { StadiumInfoComponent } from "./components/stadium-info/stadium-info.component";
import { SingleStadiumComponent } from "./components/single-stadium/single-stadium.component";
import { HttpClientModule } from "@angular/common/http";
import { SearchTeamStadiumComponent } from './components/search-team-stadium/search-team-stadium.component';
import { SearchPlayerComponent } from './components/search-player/search-player.component';
import { IMCComponent } from './components/imc/imc.component';
import { WeatherComponent } from './components/weather/weather.component';
import { FilterPipe } from './pipes/filter.pipe';
import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CupEventComponent,
    ScoreComponent,
    NewsComponent,
    StatsComponent,
    BlogComponent,
    NewsInfoComponent,
    ArticleComponent,
    MatchesComponent,
    PlayersComponent,
    InformationsComponent,
    AddPlayerComponent,
    AddMatchComponent,
    AddTeamComponent,
    DashboardComponent,
    TeamTableComponent,
    MatchsTableComponent,
    PlayersTableComponent,
    MatchInfoComponent,
    PlayerInfoComponent,
    BannerComponent,
    EditMatchComponent,
    EditPlayerComponent,
    EditTeamComponent,
    AsterixPipe,
    ReversePipe,
    SearchComponent,
    AddStadiumComponent,
    StadiumTableComponent,
    StadiumInfoComponent,
    SingleStadiumComponent,
    SearchTeamStadiumComponent,
    SearchPlayerComponent,
    IMCComponent,
    WeatherComponent,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwPaginationModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
