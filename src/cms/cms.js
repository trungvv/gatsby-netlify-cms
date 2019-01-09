import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import HomePagePreview from "./preview-templates/HomePagePreview";
import MeetupPreview from "./preview-templates/MeetupPreview";
import FooterPreview from "./preview-templates/FooterPreview";
import NavbarPreview from "./preview-templates/NavbarPreview";
import PastMeetupsPagePreview from "./preview-templates/PastMeetupsPagePreview";

CMS.registerPreviewTemplate("meetups", MeetupPreview);
CMS.registerPreviewTemplate("footer", FooterPreview);
CMS.registerPreviewTemplate("navbar", NavbarPreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("pastMeetups", PastMeetupsPagePreview);

CMS.registerEditorComponent({
    id: "youtube",
    label: "Youtube",
    icon: 'video',
    fields: [{name: 'id', label: 'Youtube Video ID'}],
    pattern: /^{{<\s?youtube (\S+)\s?>}}/,
    fromBlock: function(match) {
      return {
        id: match[1]
      };
    },
    toBlock: function(obj) {
      return '{{< youtube ' + obj.id + ' >}}';
    },
    toPreview: function(obj) {
      return (
        '<img src="http://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>'
      );
    }
  });
