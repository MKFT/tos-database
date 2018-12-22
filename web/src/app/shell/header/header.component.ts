import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Theme, ThemeService} from "../../shared/service/theme.service";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faCommentAlt, faMoon, faSearch} from "@fortawesome/free-solid-svg-icons";
import {faSun} from "@fortawesome/free-solid-svg-icons/faSun";
import {TOSRegionService} from "../../shared/service/tos-region.service";
import {TOSUrlService} from "../../shared/service/tos-url.service";
import {TOSDataSet} from "../../shared/domain/tos/tos-domain";
import {TOSRegion} from "../../shared/domain/tos-region";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'tos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  RegionService = TOSRegionService;
  Theme = Theme;
  TOSDataSet = TOSDataSet;
  TOSRegion = TOSRegion;

  faCommentAlt = faCommentAlt;
  faGithub = faGithub;
  faMoon = faMoon;
  faSearch = faSearch;
  faSun = faSun;

  isOpenSearch: boolean;

  constructor(
    private regionService: TOSRegionService,
    public theme: ThemeService
  ) {}

  routerLink(url: string): string {
    return TOSUrlService.Route(TOSRegionService.Region, url);
  }

  regionSelect(region: any): boolean {
    this.regionService.regionRelect(region);
    return false;
  }

}
