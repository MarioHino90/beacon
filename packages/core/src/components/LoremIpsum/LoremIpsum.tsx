import React from "react";
import classNames from "classnames";

import { Box } from "../Box";

import { LoremIpsumProps } from "./types";

const text = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin metus magna, elementum ac scelerisque et, aliquam sit amet mi. Sed semper diam ac tortor commodo vehicula. Phasellus mi velit, sollicitudin nec rhoncus nec, ullamcorper in risus. Quisque nec orci in neque egestas porta. Vivamus dui urna, vestibulum et erat et, luctus imperdiet dolor. Ut mollis tortor sed sem suscipit, porttitor dignissim dolor aliquam. Vivamus at mi feugiat, dapibus metus in, volutpat neque. Sed egestas condimentum orci, ac finibus urna sodales ac.",
  "Nullam turpis nisi, luctus in augue at, suscipit posuere mauris. In ut efficitur nunc. Proin orci odio, pretium vitae augue a, maximus porta tellus. Sed tincidunt quam orci. Cras elementum luctus turpis, eget tincidunt arcu luctus consequat. Etiam fringilla ultrices ipsum vel placerat. Maecenas odio nibh, commodo non mi eu, vehicula vulputate orci. Curabitur pretium nisl non vehicula mattis. Fusce a dui nec ex imperdiet pretium. Sed tempor nulla ac egestas vestibulum. Praesent venenatis gravida dolor quis fermentum. Vestibulum vestibulum eu urna eget elementum. Nullam rhoncus orci a diam euismod iaculis.",
  "Cras arcu velit, aliquet at odio vitae, volutpat lobortis sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur mollis mi non ante vestibulum maximus. Suspendisse potenti. Quisque sagittis, tellus ut interdum rutrum, ex ligula vehicula dui, eget volutpat eros nulla at nunc. Morbi interdum in elit consequat volutpat. Sed at augue in arcu interdum luctus. Nunc pretium neque et bibendum malesuada. Aliquam et enim a enim dictum porta non vitae sem. Nullam sit amet placerat mauris, sed pretium arcu. Nunc finibus neque ac velit euismod, non fermentum nibh auctor. Suspendisse vitae arcu molestie, dapibus dui vel, varius quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sit amet lorem vitae dolor ullamcorper feugiat imperdiet in tellus. Sed et risus condimentum, vulputate nulla quis, mattis magna.",
  "Proin mattis magna purus, ac eleifend ante mollis in. Sed tincidunt aliquam urna. Donec condimentum, diam id varius sodales, ligula diam vulputate risus, ac dictum augue metus id nisl. Nulla facilisi. Phasellus lobortis odio nec massa finibus vehicula. Mauris efficitur nisi ac vestibulum scelerisque. Cras accumsan est ac est tristique, id placerat diam interdum. Suspendisse vulputate molestie odio a efficitur. Fusce viverra mi eros, in pellentesque erat dapibus eget. Donec iaculis lectus arcu, at faucibus erat rhoncus vel. Aenean accumsan, tortor non rutrum varius, tellus justo euismod nisl, in rhoncus ipsum elit nec ante. Cras vel magna interdum, mattis nisi eget, suscipit nunc. Vestibulum venenatis mi vel lobortis eleifend.",
  "Nullam sit amet venenatis urna. Etiam pretium, purus eu cursus venenatis, elit odio sodales metus, eu tincidunt ipsum dolor a dolor. Donec vulputate, lorem in bibendum tristique, quam arcu eleifend tortor, et malesuada ex nisi cursus mi. Pellentesque eget cursus neque, quis vulputate lacus. Vivamus tempor velit eget ipsum iaculis viverra. Vestibulum mattis malesuada nisl vel posuere. Nam ullamcorper congue metus, eget rhoncus libero iaculis non. Curabitur rutrum quis sapien rutrum blandit. Cras quis consequat enim. Mauris luctus semper erat non molestie. Vivamus cursus in mi sed tincidunt. Donec accumsan mi at vulputate feugiat. Vestibulum feugiat sem quis ex pretium ultricies. Fusce non quam tincidunt, malesuada sem ut, eleifend nunc. Duis tempus nulla turpis, ac dictum ipsum dignissim ac.",
  "Vivamus interdum feugiat purus, at facilisis massa maximus ut. In cursus tortor a metus efficitur, quis aliquet arcu euismod. Curabitur fringilla in massa interdum viverra. Vestibulum volutpat, libero iaculis venenatis cursus, magna orci mollis eros, a lobortis justo ipsum a justo. Donec porta in purus eu condimentum. Integer sit amet laoreet orci. Donec tempor erat eu feugiat feugiat. Donec accumsan purus ex, feugiat lobortis ante aliquam vel. In posuere augue sed lectus eleifend ultricies. Etiam eleifend sem magna. Sed convallis velit in sollicitudin tincidunt. Mauris sed velit nec odio sagittis feugiat id vel magna. Duis iaculis porta est, ut finibus justo hendrerit vitae. Cras rutrum at est eget egestas. Mauris ac aliquam dui.",
  "Morbi euismod sodales euismod. Nunc rutrum pretium purus et lobortis. Donec vulputate vitae leo lobortis euismod. Phasellus interdum vitae ex ut lacinia. Vivamus luctus auctor ligula, vel tempor mi vestibulum nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut pretium vel tortor vel tristique. Ut eleifend vulputate malesuada. Donec consectetur justo in pretium interdum. Suspendisse rhoncus eleifend leo elementum porta. Aenean ut nisl id ante lobortis fringilla ac ut orci.",
  "Aenean placerat nisl ac cursus euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In purus nunc, ultrices sit amet purus ut, ultrices eleifend lectus. Vestibulum ut auctor metus, nec pellentesque lacus. Suspendisse luctus elementum libero sit amet volutpat. Cras molestie tortor sem, sit amet consequat augue maximus eu. Aenean pretium ornare augue, eu rhoncus risus. Ut ac pretium ante.",
  "Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin lacinia nisl dolor, nec luctus leo luctus et. Phasellus a nulla eget ligula tempus tincidunt. Duis eget tortor eget dolor convallis dapibus. Nunc augue purus, consectetur vitae vulputate nec, convallis id ex. Vestibulum tincidunt gravida enim. Ut sagittis est blandit odio consequat consequat. Quisque tristique rutrum felis in suscipit. Donec suscipit, velit ut gravida placerat, nibh justo viverra sapien, et finibus ligula ligula id arcu. Donec vitae sem posuere, efficitur arcu id, ultrices dolor. Duis vel erat vitae magna consequat sollicitudin quis non leo. Vivamus lectus enim, tristique sit amet convallis eget, feugiat eget nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
];

export const LoremIpsum = ({
  className,
  paragraphs = 1,
  ...props
}: LoremIpsumProps): React.ReactElement => {
  return (
    <div {...props} className={classNames(["bcl-lorem-ipsum", className])}>
      {text.slice(0, paragraphs).map((t, idx) => (
        <Box boxMargin={{ bottom: "md" }} key={idx}>
          {t}
        </Box>
      ))}
    </div>
  );
};
