import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from "./playlist.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos:Array<Video>;

    constructor() {
        this.videos = [
            new Video(1, "VR6 First Drive", "vvxwEgFugvU&t", "First drive after VR6 rebuild"),
            new Video(2, "VR6 Big Turboe", "IoBljFoszC0", "750WHP+ First Drive")
        ]
    }
}
