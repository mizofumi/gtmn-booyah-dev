FROM python:3.6

ARG project_dir=/projects/

ADD src/requirements.txt $project_dir

WORKDIR $project_dir

RUN apt update -y

RUN apt install -y ffmpeg

RUN pip install -r requirements.txt
