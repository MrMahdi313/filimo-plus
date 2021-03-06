import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { IMovie } from '../app.interface';
import { MovieService } from './movie.service';
import { FullscreenLoading } from '../shared/decorator/fullscreen-loading.decorator';
import { Log } from '../shared/helper/log.helper';
import { AppData } from '../app.data';

@Injectable()
export class MovieResolver implements Resolve<IMovie> {

  constructor(
    private appData: AppData,
    private movieService: MovieService
  ) {
  }

  @FullscreenLoading()
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<IMovie> {
    const id = route.paramMap.get('id') || '';
    return new Promise<IMovie>((resolve, reject) => {
      const movie: IMovie = this.appData.movie.find(item => item.id === id || item.originalId === id);
      if (movie) {
        resolve(movie);
        return;
      }
      //
      this.movieService.getDetails(id).subscribe({
        next: (response) => {
          Log.i('MovieResolver#resolve', response);
          if (response.success) {
            this.appData.movie.push(response.data);
            resolve(response.data);
            return;
          }
          reject(new Error(response.message));
        },
        error: (error) => {
          reject(new Error(error));
        }
      });
    });
  }
}
