FROM python:3.8

WORKDIR /back

RUN apt-get update -y 
RUN apt-get install -y git pipenv

RUN git clone https://github.com/Denys-Doskochynskiy/cloud-uklon-lab.git

WORKDIR /back/cloud-uklon-lab/amplify/backend/function/uklonapi/src
RUN pip3 install --upgrade pip -r requirements.txt
RUN pip3 install --user pipenv
RUN pip3 --no-cache-dir install --upgrade awscli
RUN pip3 install gunicorn

ENV STORAGE_UKLONDB_NAME=uklon-dev

EXPOSE 5000

CMD ["gunicorn", "-b", ":5000", "index:app"]
