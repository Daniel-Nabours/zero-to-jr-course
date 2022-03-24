import type { NextPage } from "next";
import { memo } from "react";

const Home: NextPage = () => {
  return (
    <div className="content">
      <div className="section">
        <header>Computer Memory</header>
        <p>
          {`At its most basic level, the memory in your computer is a long, long
          list of numbers, each with its own address in the list.`}
        </p>
        <p>
          {`Let's say you're an intern at a big company with a filing cabinet. The
          filing cabinet has been carefully organized into numbers, so that
          there are, say, ten drawers (labelled 0-9), each drawer holds 100
          folders (labelled 0-99), and each folder holds ten files. This is
          convenient for you: you don't even have to say "the file you want is
          in drawer 3 folder 78 file 0," you can just call that file 3780 and
          you know what you're talking about.`}
        </p>
        <p>
          {` The boss has told you that the company has kept your daily tasks
          stored in these files; you're pretty fast at pulling out and reading
          these, so you start at file 0000 (drawer 0 folder 00 file 0) and read
          what it says:`}
        </p>
        <code> SET R0 to 3</code>
        <p>
          {` R0? What R0? You then remember that your boss handed you a notepad
          when you showed up, each page labelled R0, R1, etc. and with a 0
          written at the top. You decide that this notepad must be a kind of
          scratchpad, you scribble out the 0 on the R0 page and write a 3.`}
        </p>
        <p>{`Confident in your method, you then look at file 0001:`}</p>
        <code>SET R1 to 4</code>
        <p>
          {` Sure, no problem. You write 4 on the R1 page of your notepad and check
          0002:`}
        </p>
        <code>R0 + R1 --&gt; R2</code>
        <p>
          {` Addition. You can do addition. You check the R0 page (there's a 3) and
          the R1 page (there's a 4) and write 7 on R2. File 0003 reads:`}
        </p>
        <code>LOAD 1875 to R0</code>
        <p>
          {`Now you notice that "1875" matches the
          format of your filing system. You go check file 1875, which reads "42"
        So you cross out the 3 on the R0 page and write "42"`}
        </p>
        <p>
          {`This is essentially how your computer operates, by performing millions
          of these tasks every second. If you're wondering how your computer
          stores those instructions (like "SET R0 to 3"), it uses an encoding
          system, just like how you used a system of tracking the locations of
          everything in your filing cabinet. The actions like SET or ADD are
          each assigned binary numbers (called opcodes), as are R0, R1 (those
          are called registers, they hold values temporarily)`}
        </p>
        <p>
          {` The memory in your computer is at heart a long list of those binary
          numbers stuck together. For instance, ADD r0 and r1 into r0 might be
          stored as`}
        </p>
        <code>010000 00000 00001 00000 00000000000</code>
        <p>{`With extra 0's at the end as filler.`}</p>
        <p>
          {`There's read only memory (ROM) which is more long term storage of
          memory, random access memory (RAM) which is where your computer
          programs run from, and stuff like EEPROM, which is what makes your
          smartphone/iPod/thumb drive work.`}
        </p>
        <p>{`At the heart of it all is just a long list of 1s and 0s.`}</p>
        <p>watch the following video for more information:</p>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/p3q5zWCw8J4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
      </div>
    </div>
  );
};

export default memo(Home);
