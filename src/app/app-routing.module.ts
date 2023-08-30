import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { HomeComponent } from "./components/home/home.component";
import { MatchesComponent } from "./components/matches/matches.component";
import { PlayersComponent } from "./components/players/players.component";
import { AddPlayerComponent } from "./components/add-player/add-player.component";
import { AddMatchComponent } from "./components/add-match/add-match.component";
import { AddTeamComponent } from "./components/add-team/add-team.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { MatchInfoComponent } from "./components/match-info/match-info.component";
import { PlayerInfoComponent } from "./components/player-info/player-info.component";
import { EditMatchComponent } from "./components/edit-match/edit-match.component";
import { EditPlayerComponent } from "./components/edit-player/edit-player.component";
import { EditTeamComponent } from "./components/edit-team/edit-team.component";
import { SearchComponent } from "./components/search/search.component";
import { AddStadiumComponent } from "./components/add-stadium/add-stadium.component";
import { StadiumInfoComponent } from "./components/stadium-info/stadium-info.component";
import { SearchTeamStadiumComponent } from "./components/search-team-stadium/search-team-stadium.component";
import { SearchPlayerComponent } from "./components/search-player/search-player.component";
import { IMCComponent } from "./components/imc/imc.component";
import { WeatherComponent } from "./components/weather/weather.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  // http://localhost:4200/signin => LoginComponent will be displayed
  { path: "signin", component: LoginComponent },
  // http://localhost:4200/subscription => SignupComponent will be displayed
  { path: "subscription", component: SignupComponent },
  { path: "myMatches", component: MatchesComponent },
  { path: "players", component: PlayersComponent },
  { path: "addplayer", component: AddPlayerComponent },
  { path: "addmatch", component: AddMatchComponent },
  { path: "addteam", component: AddTeamComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "matchinfo/:id", component: MatchInfoComponent },
  { path: "playerinfo/:id", component: PlayerInfoComponent },
  { path: "editmatch", component: EditMatchComponent },
  { path: "editplayer", component: EditPlayerComponent },
  { path: "editteam", component: EditTeamComponent },
  { path: "search", component: SearchComponent },
  { path: "addstadium", component: AddStadiumComponent },
  { path: "stadiuminfo/:id", component: StadiumInfoComponent },
  { path: "searchteamstadium", component: SearchTeamStadiumComponent },
  { path: "searchplayer", component: SearchPlayerComponent },
  { path: "imc", component: IMCComponent },
  { path: "signupAdmin", component: SignupComponent },
  { path: "weather", component: WeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
