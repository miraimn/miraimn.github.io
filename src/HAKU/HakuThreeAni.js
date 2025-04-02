const emptyFunc = () => {};

export var AniAction = [
  emptyFunc,
  emptyFunc,
  emptyFunc,
  emptyFunc,
  emptyFunc,
  emptyFunc,
  emptyFunc,
  emptyFunc,
  emptyFunc,
  emptyFunc,
  emptyFunc,
];

export var InfiniteScaleAniAction = [emptyFunc, emptyFunc, emptyFunc];
export var InfiniteMove2PointAniAction = [emptyFunc, emptyFunc, emptyFunc];

export function MoveX(num, obj, target, scale = 1, next = null) {
  if (obj.current.position.x > target) {
    AniAction[num] = (ref, delta) => {
      if (ref.current.position.x > target) {
        ref.current.position.x -= delta * scale;
      } else {
        ref.current.position.x = target;
        if (next == null) {
          AniAction[num] = emptyFunc;
        } else {
          next();
        }
      }
    };
  } else {
    AniAction[num] = (ref, delta) => {
      if (ref.current.position.x < target) {
        ref.current.position.x += delta * scale;
      } else {
        ref.current.position.x = target;
        if (next == null) {
          AniAction[num] = emptyFunc;
        } else {
          next();
        }
      }
    };
  }
}
export function MoveY(num, obj, target, scale = 1, next = null) {
  if (obj.current.position.y > target) {
    AniAction[num] = (ref, delta) => {
      if (ref.current.position.y > target) {
        ref.current.position.y -= delta * scale;
      } else {
        ref.current.position.y = target;
        if (next == null) {
          AniAction[num] = emptyFunc;
        } else {
          next();
        }
      }
    };
  } else {
    AniAction[num] = (ref, delta) => {
      if (ref.current.position.y < target) {
        ref.current.position.y += delta * scale;
      } else {
        ref.current.position.y = target;
        if (next == null) {
          AniAction[num] = emptyFunc;
        } else {
          next();
        }
      }
    };
  }
}
export function MoveZ(num, obj, target, scale = 1, next = null) {
  if (obj.current.position.z > target) {
    AniAction[num] = (ref, delta) => {
      if (ref.current.position.z > target) {
        ref.current.position.z -= delta * scale;
      } else {
        ref.current.position.z = target;
        if (next == null) {
          AniAction[num] = emptyFunc;
        } else {
          next();
        }
      }
    };
  } else {
    AniAction[num] = (ref, delta) => {
      if (ref.current.position.z < target) {
        ref.current.position.z += delta * scale;
      } else {
        ref.current.position.z = target;
        if (next == null) {
          AniAction[num] = emptyFunc;
        } else {
          console.log(next);
          next();
        }
      }
    };
  }
}

export function Move(num, obj, target, scale = 1, next = null) {
  MoveX(5, obj, target[0], scale);
  MoveY(6, obj, target[1], scale);
  MoveZ(7, obj, target[2], scale);
  var initLength_x = Math.abs(obj.current.position.x - target[0]);
  var initLength_y = Math.abs(obj.current.position.y - target[1]);
  var initLength_z = Math.abs(obj.current.position.z - target[2]);
  var avarageLength =
    Math.abs(obj.current.position.x - target[0]) +
    Math.abs(obj.current.position.y - target[1]) +
    Math.abs(obj.current.position.z - target[2]);
  avarageLength /= 3;
  AniAction[num] = (ref, delta) => {
    var time = avarageLength / delta;
    let off = true;
    if (AniAction[5] != emptyFunc) {
      off = false;
      AniAction[5](ref, initLength_x / time);
    }
    if (AniAction[6] != emptyFunc) {
      off = false;
      AniAction[6](ref, initLength_y / time);
    }
    if (AniAction[7] != emptyFunc) {
      off = false;
      AniAction[7](ref, initLength_z / time);
    }
    // console.log(AniAction[7]);

    if (off) {
      if (next == null) {
        AniAction[num] = emptyFunc;
      } else {
        next();
      }
    }
  };
}

export function RotateY(
  num,
  obj,
  target,
  reverse = false,
  scale = 1,
  next = null
) {
  let rotateTmp = 0;
  var tar = obj.current.rotation.y + target * (reverse ? 1 : -1);
  AniAction[num] = (ref, delta) => {
    if (rotateTmp < target) {
      ref.current.rotation.y += delta * scale * (reverse ? 1 : -1);
      rotateTmp += delta * scale;
    } else {
      ref.current.rotation.y = tar;
      if (next == null) {
        AniAction[num] = emptyFunc;
      } else {
        next();
      }
    }
  };
}
export function RotateX(
  num,
  obj,
  target,
  reverse = false,
  scale = 1,
  next = null
) {
  let rotateTmp = 0;
  var tar = obj.current.rotation.x + target * (reverse ? 1 : -1);
  AniAction[num] = (ref, delta) => {
    if (rotateTmp < target) {
      ref.current.rotation.x += delta * scale * (reverse ? 1 : -1);
      rotateTmp += delta * scale;
    } else {
      ref.current.rotation.x = tar;
      if (next == null) {
        AniAction[num] = emptyFunc;
      } else {
        next();
      }
    }
  };
}

export function RotateZ(
  num,
  obj,
  target,
  reverse = false,
  scale = 1,
  next = null
) {
  let rotateTmp = 0;
  var tar = obj.current.rotation.z + target * (reverse ? 1 : -1);
  AniAction[num] = (ref, delta) => {
    if (rotateTmp < target) {
      ref.current.rotation.z += delta * scale * (reverse ? 1 : -1);
      rotateTmp += delta * scale;
    } else {
      console.log(ref.current.rotation.z + " , " + tar);
      ref.current.rotation.z = tar;
      if (next == null) {
        AniAction[num] = emptyFunc;
      } else {
        next();
      }
    }
  };
}
export function Rotate(
  num,
  obj,
  target,
  reverse = [false, false, false],
  scale = 1,
  next = null
) {
  RotateX(5, obj, target[0], reverse[0], scale);
  RotateY(6, obj, target[1], reverse[1], scale);
  RotateZ(7, obj, target[2], reverse[2], scale);
  AniAction[num] = (ref, delta) => {
    let off = true;
    if (AniAction[5] != emptyFunc) {
      off = false;
      AniAction[5](ref, delta);
    }
    if (AniAction[6] != emptyFunc) {
      off = false;
      AniAction[6](ref, delta);
    }
    if (AniAction[7] != emptyFunc) {
      off = false;
      AniAction[7](ref, delta);
    }

    if (off) {
      console.log(ref.current.rotation);
      if (next == null) {
        AniAction[num] = emptyFunc;
      } else {
        next();
      }
    }
  };
}

export function ScaleAllWithConstant(num, obj, target, scale = 1, next = null) {
  var init = [obj.current.scale.x, obj.current.scale.y, obj.current.scale.z];
  AniAction[num] = (ref, delta) => {
    var off = true;
    if (init[0] < target) {
      if (ref.current.scale.x < target) {
        off = false;
        ref.current.scale.x += delta * scale;
      } else {
        ref.current.scale.x = target;
      }
    } else {
      if (ref.current.scale.x > target) {
        off = false;
        ref.current.scale.x -= delta * scale;
      } else {
        ref.current.scale.x = target;
      }
    }

    if (init[1] < target) {
      if (ref.current.scale.y < target) {
        off = false;
        ref.current.scale.y += delta * scale;
      } else {
        ref.current.scale.y = target;
      }
    } else {
      if (ref.current.scale.y > target) {
        off = false;
        ref.current.scale.y -= delta * scale;
      } else {
        ref.current.scale.y = target;
      }
    }

    if (init[2] < target) {
      if (ref.current.scale.z < target) {
        off = false;
        ref.current.scale.z += delta * scale;
      } else {
        ref.current.scale.z = target;
      }
    } else {
      if (ref.current.scale.z > target) {
        off = false;
        ref.current.scale.z -= delta * scale;
      } else {
        ref.current.scale.z = target;
      }
    }
    if (off) {
      if (next == null) {
        AniAction[num] = emptyFunc;
      } else {
        next();
      }
    }
  };
}

export function EmptyAniAction(over = emptyFunc) {
  for (let i = 0; i < AniAction.length; i++) {
    AniAction[i] = emptyFunc;
  }
  over();
}

////////////

export function InfiniteScale(num, obj, min, max, scale = 1) {
  var scaleTargetMin = [
    obj.current.scale.x * min,
    obj.current.scale.y * min,
    obj.current.scale.z * min,
  ];
  var scaleTargetMax = [
    obj.current.scale.x * max,
    obj.current.scale.y * max,
    obj.current.scale.z * max,
  ];
  var avarage = 0;
  for (let i = 0; i < 3; i++) {
    avarage += Math.abs(scaleTargetMax[i] - scaleTargetMin[i]);
  }
  avarage /= 3;
  let isOut = true;
  InfiniteScaleAniAction[num] = (ref, delta) => {
    let time = avarage / delta;
    if (isOut) {
      let off = true;
      if (ref.current.scale.x < scaleTargetMax[0]) {
        off = false;
        ref.current.scale.x +=
          (Math.abs(scaleTargetMax[0] - scaleTargetMin[0]) / time) * scale;
      }
      if (ref.current.scale.y < scaleTargetMax[1]) {
        off = false;
        ref.current.scale.y +=
          (Math.abs(scaleTargetMax[1] - scaleTargetMin[1]) / time) * scale;
      }
      if (ref.current.scale.z < scaleTargetMax[2]) {
        off = false;
        ref.current.scale.z +=
          (Math.abs(scaleTargetMax[2] - scaleTargetMin[2]) / time) * scale;
      }
      if (off) {
        isOut = false;
      }
    } else {
      let off = true;
      if (ref.current.scale.x > scaleTargetMin[0]) {
        off = false;
        ref.current.scale.x -=
          (Math.abs(scaleTargetMax[0] - scaleTargetMin[0]) / time) * scale;
      }
      if (ref.current.scale.y > scaleTargetMin[1]) {
        off = false;
        ref.current.scale.y -=
          (Math.abs(scaleTargetMax[1] - scaleTargetMin[1]) / time) * scale;
      }
      if (ref.current.scale.z > scaleTargetMin[2]) {
        off = false;
        ref.current.scale.z -=
          (Math.abs(scaleTargetMax[2] - scaleTargetMin[2]) / time) * scale;
      }
      if (off) {
        isOut = true;
      }
    }
  };
}

export function InfiniteMove2Point(num, obj, point1, point2, scale = 1) {
  var start = true;
  Move(8 + num, obj, point1, scale);
  var initLength_x = Math.abs(point1[0] - point2[0]);
  var initLength_y = Math.abs(point1[1] - point2[1]);
  var initLength_z = Math.abs(point1[2] - point2[2]);
  var avarageLength =
    Math.abs(point1[0] - point2[0]) +
    Math.abs(point1[1] - point2[1]) +
    Math.abs(point1[2] - point2[2]);
  avarageLength /= 3;
  var goto2 = true;

  InfiniteMove2PointAniAction[num] = (ref, delta) => {
    if (start) {
      AniAction[8 + num](ref, delta);
      if (AniAction[8 + num] == emptyFunc) {
        start = false;
      }
    } else {
      var time = avarageLength / delta;
      if (goto2) {
        let off = true;
        if (point1[0] < point2[0]) {
          if (ref.current.position.x < point2[0]) {
            off = false;
            ref.current.position.x +=
              (Math.abs(point1[0] - point2[0]) / time) * scale;
          }
        } else if (point1[0] > point2[0]) {
          if (ref.current.position.x > point2[0]) {
            off = false;
            ref.current.position.x -=
              (Math.abs(point1[0] - point2[0]) / time) * scale;
          }
        }
        if (point1[1] < point2[1]) {
          if (ref.current.position.y < point2[1]) {
            off = false;
            ref.current.position.y +=
              (Math.abs(point1[1] - point2[1]) / time) * scale;
          }
        } else if (point1[1] > point2[1]) {
          if (ref.current.position.y > point2[1]) {
            off = false;
            ref.current.position.y -=
              (Math.abs(point1[1] - point2[1]) / time) * scale;
          }
        }

        if (point1[2] < point2[2]) {
          if (ref.current.position.z < point2[2]) {
            off = false;
            ref.current.position.z +=
              (Math.abs(point1[2] - point2[0]) / time) * scale;
          }
        } else if (point1[2] > point2[2]) {
          if (ref.current.position.z > point2[2]) {
            off = false;
            ref.current.position.z -=
              (Math.abs(point1[2] - point2[2]) / time) * scale;
          }
        }
        if (off) {
          goto2 = false;
        }
      } else {
        let off = true;
        if (point1[0] > point2[0]) {
          if (ref.current.position.x < point1[0]) {
            off = false;
            ref.current.position.x +=
              (Math.abs(point1[0] - point1[0]) / time) * scale;
          }
        } else if (point1[0] < point2[0]) {
          if (ref.current.position.x > point1[0]) {
            off = false;
            ref.current.position.x -=
              (Math.abs(point1[0] - point2[0]) / time) * scale;
          }
        }

        if (point1[1] > point2[1]) {
          if (ref.current.position.y < point1[1]) {
            off = false;
            ref.current.position.y +=
              (Math.abs(point1[1] - point2[1]) / time) * scale;
          }
        } else if (point1[1] < point2[1]) {
          if (ref.current.position.y > point1[1]) {
            off = false;
            ref.current.position.y -=
              (Math.abs(point1[1] - point2[1]) / time) * scale;
          }
        }

        if (point1[2] > point2[2]) {
          if (ref.current.position.z < point1[2]) {
            off = false;
            ref.current.position.z +=
              (Math.abs(point1[2] - point2[0]) / time) * scale;
          }
        } else if (point1[2] < point2[2]) {
          if (ref.current.position.z > point1[2]) {
            off = false;
            ref.current.position.z -=
              (Math.abs(point1[2] - point2[2]) / time) * scale;
          }
        }
        if (off) {
          goto2 = true;
        }
      }
    }
  };
}
