import Component, { tracked } from '@glimmer/component';

const photos = {
  'chris': '/assets/images/photos/chris@604.png 604w, /assets/images/photos/chris@1208.png 1208w',
  'ghislaine': '/assets/images/photos/ghislaine@604.png 604w, /assets/images/photos/ghislaine@1208.png 1208w',
  'marco': '/assets/images/photos/marco@604.png 604w, /assets/images/photos/marco@1208.png 1208w',
};

export default class WorkWithUs extends Component {
  @tracked
  get teamMemberName() {
    if (!this.args.teamMember || !photos.hasOwnProperty(this.args.teamMember)) {
      return 'marco';
    }

    return this.args.teamMember;
  }

  @tracked
  get capitalizedTeamMemberName() {
    let [firstLetter, ...rest] = this.teamMemberName;
    return [firstLetter.toUpperCase(), ...rest].join('');
  }

  @tracked
  get teamMemberPhoto() {
    return photos[this.teamMemberName];
  }
}
